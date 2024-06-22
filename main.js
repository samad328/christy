


gsap.registerPlugin(ScrollTrigger)
 


const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



let scroll;

const body = document.body;
const select = (e) => document.querySelector(e);
const selectAll = (e) => document.querySelectorAll(e);
//const container = select('.site-main');

initPageTransitions();

// // Animation - First Page Load
function initLoaderHome() { 

  var tl = gsap.timeline();

	tl.set(".loading-screen", { 
		top: "0",
	});	

  if ($(window).width() > 540) { 
    tl.set("main .once-in", {
      y: "50vh"
    });
  } else {
    tl.set("main .once-in", {
      y: "10vh"
    });
  }

  tl.set(".loading-words", { 
		opacity: 0,
    y: -50
	});

  tl.set(".loading-words .active", { 
		display: "none",
	});

  tl.set(".loading-words .home-active, .loading-words .home-active-last", { 
		display: "block",
    opacity: 0
	});

  tl.set(".loading-words .home-active-first", { 
		opacity: 1,
	});

  if ($(window).width() > 540) { 
    tl.set(".loading-screen .rounded-div-wrap.bottom", { 
      height: "10vh",
    });	
  } else {
    tl.set(".loading-screen .rounded-div-wrap.bottom", { 
      height: "5vh",
    });	
  }

  tl.set("html", { 
		cursor: "wait"
	});

  // tl.call(function() {
  //   scroll.stop();
  // });

  tl.to(".loading-words", {
		duration: .8,
		opacity: 1,
    y: -50,
    ease: "Power4.easeOut",
    delay: .5
	});

  tl.to(".loading-words .home-active", {
		duration: .01,
		opacity: 1,
    stagger: .15,
    ease: "none",
    onStart: homeActive
  },"=-.4");

  function homeActive() {
    gsap.to(".loading-words .home-active", {
      duration: .01,
      opacity: 0,
      stagger: .15,
      ease: "none",
      delay: .15
    });
  }

  tl.to(".loading-words .home-active-last", {
		duration: .01,
		opacity: 1,
    delay: .15
  });
  
	tl.to(".loading-screen", {
		duration: .8,
		top: "-100%",
		ease: "Power4.easeInOut",
    delay: .2
  });

  tl.to(".loading-screen .rounded-div-wrap.bottom", {
		duration: 1,
		height: "0vh",
		ease: "Power4.easeInOut"
	},"=-.8");

  tl.to(".loading-words", {
		duration: .3,
		opacity: 0,
    ease: "linear"
	},"=-.8");

	tl.set(".loading-screen", { 
		top: "calc(-100%)" 
	});	

  tl.set(".loading-screen .rounded-div-wrap.bottom", { 
		height: "0vh"
	});	

  tl.to("main .once-in", {
		duration: 1.5,
    y: "0vh",
    stagger: .07,
		ease: "Expo.easeOut",
    clearProps: true
	},"=-.8");

  tl.set("html", { 
		cursor: "auto"
	},"=-1.2");

  // tl.call(function() {
  //   scroll.start();
  // });
  
}


// // Animation - First Page Load
function initLoader() { 

  var tl = gsap.timeline();

	tl.set(".loading-screen", { 
		top: "0",
	});	

  if ($(window).width() > 540) { 
    tl.set("main .once-in", {
      y: "50vh"
    });
  } else {
    tl.set("main .once-in", {
      y: "10vh"
    });
  }

  tl.set(".loading-words", { 
		opacity: 1,
    y: -50
	});

  if ($(window).width() > 540) { 
    tl.set(".loading-screen .rounded-div-wrap.bottom", { 
      height: "10vh",
    });	
  } else {
    tl.set(".loading-screen .rounded-div-wrap.bottom", { 
      height: "5vh",
    });	
  }

  tl.set("html", { 
		cursor: "wait"
	});
  
	tl.to(".loading-screen", {
		duration: .8,
		top: "-100%",
		ease: "Power4.easeInOut",
    delay: .5
  });

  tl.to(".loading-screen .rounded-div-wrap.bottom", {
		duration: 1,
		height: "0vh",
		ease: "Power4.easeInOut"
	},"=-.8");

  tl.to(".loading-words", {
		duration: .3,
		opacity: 0,
    ease: "linear",
	},"=-.8");

	tl.set(".loading-screen", { 
		top: "calc(-100%)" 
	});	

  tl.set(".loading-screen .rounded-div-wrap.bottom", { 
		height: "0vh"
	});	

  tl.to("main .once-in", {
		duration: 1,
    y: "0vh",
    stagger: .05,
		ease: "Expo.easeOut",
    clearProps: "true"
	},"=-.8");

  tl.set("html", { 
		cursor: "auto",
	},"=-.8");

}


// Animation - Page transition In
function pageTransitionIn() {
	var tl = gsap.timeline();

  // tl.call(function() {
  //   scroll.stop();
  // });

  tl.set(".loading-screen", { 
		top: "100%" 
	});	

  tl.set(".loading-words", { 
		opacity: 0,
    y: 0
	});

  tl.set("html", { 
		cursor: "wait"
	});

  if ($(window).width() > 540) { 
    tl.set(".loading-screen .rounded-div-wrap.bottom", { 
      height: "10vh",
    });	
  } else {
    tl.set(".loading-screen .rounded-div-wrap.bottom", { 
      height: "5vh",
    });	
  }

	tl.to(".loading-screen", {
		duration: .5,
		top: "0%",
		ease: "Power4.easeIn"
	});

  if ($(window).width() > 540) { 
    tl.to(".loading-screen .rounded-div-wrap.top", {
      duration: .4,
      height: "10vh",
      ease: "Power4.easeIn"
    },"=-.5");
  } else {
    tl.to(".loading-screen .rounded-div-wrap.top", {
      duration: .4,
      height: "10vh",
      ease: "Power4.easeIn"
    },"=-.5");
  }

  tl.to(".loading-words", {
		duration: .8,
		opacity: 1,
    y: -50,
    ease: "Power4.easeOut",
    delay: .05
	});

  tl.set(".loading-screen .rounded-div-wrap.top", {
		height: "0vh"
	});

	tl.to(".loading-screen", {
		duration: .8,
		top: "-100%",
		ease: "Power3.easeInOut"
	},"=-.2");

  tl.to(".loading-words", {
		duration: .6,
		opacity: 0,
    ease: "linear"
	},"=-.8");

  tl.to(".loading-screen .rounded-div-wrap.bottom", {
		duration: .85,
		height: "0",
		ease: "Power3.easeInOut"
	},"=-.6");

  tl.set("html", { 
		cursor: "auto"
	},"=-0.6");

  if ($(window).width() > 540) { 
    tl.set(".loading-screen .rounded-div-wrap.bottom", {
      height: "10vh"
    });
  } else {
    tl.set(".loading-screen .rounded-div-wrap.bottom", {
      height: "5vh"
    });
  }

  tl.set(".loading-screen", { 
		top: "100%" 
	});	

  tl.set(".loading-words", {
		opacity: 0,
	});
  
}


// Animation - Page transition Out
function pageTransitionOut() {
	var tl = gsap.timeline();

  


  if ($(window).width() > 540) { 
    tl.set("main .once-in", {
      y: "50vh",
    });

  } else {
    tl.set("main .once-in", {
      y: "20vh"
    });

    
   
  }
  
  
  // tl.call(function() {
  //   scroll.start();
  // });

  tl.to("main .once-in", {
    duration: 1,
    y: "0vh",
    stagger: .05,
    ease: "Expo.easeOut",
    delay: .8,
    clearProps: "true"
  });

}

function initPageTransitions() {

  //let scroll;

  // do something before the transition starts
  barba.hooks.before(() => {
    select('html').classList.add('is-transitioning');
  });

  // do something after the transition finishes
  barba.hooks.after(() => {
    select('html').classList.remove('is-transitioning');
    console.log('kop')
    // // reinit locomotive scroll
    // scroll.init();
    // scroll.stop();
  });

  // scroll to the top of the page
  // barba.hooks.enter(() => {
  //   // scroll.destroy();
  // });

  // scroll to the top of the page
  barba.hooks.afterEnter(() => {
    window.scrollTo(0, '10px');
    
  });

  // if ($(window).width() > 540) { 
  //   barba.hooks.leave(() => {
  //     // $(".btn-hamburger, .btn-menu").removeClass('active');
  //     // $("main").removeClass('nav-active');
  //   }); 
  // }
  

  barba.init({
    sync: true,
    debug: false,
    timeout:7000,
    transitions: [{
      name: 'default',
      once(data) {
        // do something once on the initial page load
        // initSmoothScroll(data.next.container);
      
        initScript();
        
        initLoader();
      },
      async leave(data) {
        // animate loading screen in
        pageTransitionIn(data.current);
        await delay(495);
        data.current.container.remove();
      },
      async enter(data) {
        // animate loading screen away
        console.log( pageTransitionOut(data.next))
        pageTransitionOut(data.next);
        initNextWord(data);
        svgmageWarp()
      },
      async beforeEnter(data) {
        // ScrollTrigger.getAll().forEach(t => t.kill());
        // scroll.destroy();
        // initSmoothScroll(data.next.container);
        initScript(); 
      },
    }, 
    {
      name: 'to-home',
      from: {
      },
      to: {
        namespace: ['home']
      },
      once(data) {
      //   // do something once on the initial page load
      //   // initSmoothScroll(data.next.container);
      
      initScript();
      svgmageWarp()
      initLoaderHome();
      },
    }]
  });

  
}

function initNextWord(data) {
  // update Text Loading https://github.com/barbajs/barba/issues/507
  let parser = new DOMParser();
  console.log(parser)
  let dom = parser.parseFromString(data.next.html, 'text/html');
  
  let nextProjects = dom.querySelector('.loading-words');
  document.querySelector('.loading-words').innerHTML = nextProjects.innerHTML;
}

function delay(n) {
	n = n || 2000;
	return new Promise((done) => {
		setTimeout(() => {
			done();
		}, n);
	});
}


function initScript() {
  select('body').classList.remove('is-loading');
  
  navToogle();
  initMagneticButtons() 
  svgmageWarp()
  // initWindowInnerheight();
  // initCheckTouchDevice();
  // initHamburgerNav();
  // initMagneticButtons();
  // initStickyCursorWithDelay();
  // initVisualFilter();
  // initScrolltriggerNav();
  // initScrollLetters();
  // initTricksWords();
  // initContactForm();
  // initTimeZone();
  // initLazyLoad();
  // initPlayVideoInview();
  // initScrolltriggerAnimations();
}



function navToogle () {

  function swapStyle() {
      var el = document.querySelector('nav');
      el.classList.toggle('show');
  }

  var menu = document.querySelectorAll('.menu-btn');
  for (let item of menu) {
      item.addEventListener('click', swapStyle);
  }
  
  
}




  var lastScrollTop; // This Varibale will store the top position

let navbar = document.getElementById('navbar'); // Get The NavBar


window.addEventListener('scroll',function(){
 //on every scroll this funtion will be called
  
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //This line will get the location on scroll
  
  if(scrollTop > lastScrollTop){ //if it will be greater than the previous
    navbar.style.top='-180px';
    //set the value to the negetive of height of navbar 
  }
  
  else{
    navbar.style.top='0';
  }
  
  lastScrollTop = scrollTop; //New Position Stored
});



/**
* Magnetic Buttons
*/
function initMagneticButtons() {
    
  var magnets = document.querySelectorAll('.magnetic')
var strength = 50

magnets.forEach( (magnet) => {
  magnet.addEventListener('mousemove', moveMagnet );
  magnet.addEventListener('mouseout', function(event) {
    gsap.to( event.currentTarget, 1, {x: 0, y: 0, ease:' Power4.easeOut'})
  } );
});

function moveMagnet(event) {
  var magnetButton = event.currentTarget
  var bounding = magnetButton.getBoundingClientRect()

  //console.log(magnetButton, bounding)

  gsap.to( magnetButton, 1, {
    x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * strength,
    y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * strength,
    ease: 'Power4.easeOut'
  })

  //magnetButton.style.transform = 'translate(' + (((( event.clientX - bounding.left)/(magnetButton.offsetWidth))) - 0.5) * strength + 'px,'+ (((( event.clientY - bounding.top)/(magnetButton.offsetHeight))) - 0.5) * strength + 'px)';
}

}




// Theme and Text Color Change

let themeButton, themeState, introItem, circleContainer, circlePath, scrollingSvgs, projectBodyClass, isLargeScreen;

const themes = [{
    '--dark--main': '#e3f7d3',
    '--dark--foreground': '#1c211e',
    '--dark--interactive': '#7e8b74',
    '--dark--opa': 'rgba(28, 33, 30, 0.85)'
}, {
    '--dark--main': '#522a00',
    '--dark--foreground': '#f6f2ef',
    '--dark--interactive': '#8D6133',
    '--dark--opa': 'rgba(246, 242, 239, 0.85)'
}, {
    '--dark--main': '#151515',
    '--dark--foreground': '#E5E5E5',
    '--dark--interactive': '#747474',
    '--dark--opa': 'rgba(229, 229, 229, 0.85)'
}, {
    '--dark--main': '#FF4005',
    '--dark--foreground': '#F7F6F5',
    '--dark--interactive': '#FF7556',
    '--dark--opa': 'rgba(247, 246, 245, 0.85)'
}, {
    '--dark--main': '#011a33',
    '--dark--foreground': '#fafcfe',
    '--dark--interactive': '#99a3ad',
    '--dark--opa': 'rgba(250, 252, 254, 0.85)'
}];
const themeTexts = ["TRY ME", "TRY AGAIN?", "ANOTHER ONE?", "HOW ABOUT THIS?", "OK, THE LAST ONE"];

const applyTheme = (themeIndex)=>{
    // console.log(themeIndex)
    const theme = themes[themeIndex];
    // console.log(theme)
    gsap.to(':root', {
        duration: 0.35,
        ease: 'power2.inOut',
        ...theme
    });
    changeButtonText(themeIndex);
}
;

const changeButtonText = (index)=>{
    const buttonText = themeTexts[index] || "try me";
    gsap.to(themeButton, {
        duration: 0.7,
        text: buttonText,
        ease: "easeOutQuart",
    });
}
;

document.addEventListener('DOMContentLoaded', ()=>{
    themeButton = document.querySelector(".underline-links.theme");
    // console.log(themeButton)
    projectBodyClass = document.body.classList.contains("projet");
    isLargeScreen = window.matchMedia("(min-width: 1024px)").matches;

    requestAnimationFrame(()=>{
        themeState = localStorage.getItem('themeState') ? parseInt(localStorage.getItem('themeState'), 10) : 0;
        applyTheme(themeState);
    }
    );

    if (themeButton) {
        themeButton.addEventListener('click', ()=>{
            themeState = (themeState + 1) % themes.length;
            applyTheme(themeState);
            localStorage.setItem('themeState', themeState);
        }
        );
    }

   
}
);




// SVG TURBULANCE

function svgmageWarp(){
let tl= gsap.timeline()

tl.to('feTurbulence',{
  duration:600,
  repeat:-1,
  yoyo:true,
  ease:'none',
  attr:{
    baseFrequency:1,
  }
})
tl.to('feDisplacementMap',{
  duration:300, 
   repeat:-1,
  yoyo:true,
  
  ease:'none',
  attr:{
    scale:1,
  }
})

}