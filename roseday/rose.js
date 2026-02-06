
document.addEventListener("DOMContentLoaded", function () {

gsap.registerPlugin(SplitText, ScrollTrigger);
const splitfirst = new SplitText(".firstsec h1", {
  type: "words"
});
let wordfirst = splitfirst.words;

gsap.from(wordfirst, {
 yPercent: 100,
    stagger: 0.05,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)",
   
})
const splitsecond = new SplitText(".secondsectextwrap", {
  type: "lines"
});
let linesecond = splitsecond.lines;

gsap.from(linesecond, {
 yPercent: 100,
    stagger: 0.05,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".secondsectextwrap",
        start: "top 50%",
       end: "+=100%",
       toggleActions: "play none none reverse",
      fastScrollEnd: true,}
   
})
const splitthird = new SplitText(".thirdsectextwrap", {
  type: "lines"
});
let linethird = splitthird.lines;

gsap.from(linethird, {
 yPercent: 100,
    stagger: 0.05,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".thirdsectextwrap",
        start: "top 50%",
       end: "+=100%",
       toggleActions: "play none none reverse",
      fastScrollEnd: true,}
   
})
const splitfourth = new SplitText(".fourthsectextwrap", {
  type: "lines"
});
let linefourth = splitfourth.lines;

gsap.from(linefourth, {
 yPercent: 100,
    stagger: 0.05,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".fourthsectextwrap",
        start: "-120 60%",
       end: "50% 30%",
       markers: true,
       toggleActions: "play none none reverse",
      fastScrollEnd: true,}
      
})

// const scrollcontainer = document.querySelector(".smooth-scroll");
// const locoScroll = new LocomotiveScroll({
//   el: scrollcontainer,
//   smooth: true,
//   smartphone: { smooth: true }, tablet: { smooth: true },
//   multiplier: 1,
// });

// locoScroll.on("scroll", ScrollTrigger.update);
// ScrollTrigger.scrollerProxy(scrollcontainer, { scrollTop(value) {
//       return arguments.length
//         ? locoScroll.scrollTo(value, {  duration: 0, disableLerp: true })
//         : locoScroll.scroll.instance.scroll.y;
//     },
//     getBoundingClientRect() {
//       return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//     },
//     pinType: scrollcontainer.style.transform ? "transform" : "fixed"
// });
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// ScrollTrigger.defaults({ scroller: "smooth-scroll" });

ScrollTrigger.matchMedia({
  "(min-width: 768px)": function() {
    // Desktop-specific ScrollTrigger animations
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".secondsec",
        start: "-20% 100%",
        end: "40% 30%",
        
        scrub: true,
       
      }
    });
    tl1.to(".firstsec img", {
     right: "69%",
    top: "150%",
    height: "40%",
    rotate: -27,
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".thirdsec",
        start: "5% 100%",
        end: "40% 30%",
        
        scrub: true,
       
      }
    });
    tl2.to(".firstsec img", {
     right: "19%",
    top: "252%",
    rotate: 16,
    },'rose');
    tl2.to(".imgwrapper ", {
    left: "62%",
    top: "151%",
    
    rotate: 27,
    },'rose');
    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".fourthsec",
        start: "-5% 100%",
        end: "30% 30%",
        
        scrub: true,
       
      }
    });
    tl3.to(".firstsec img", {
    right: "42%",
    top: "340%",
    rotate: 16,
    },'rose');
    tl3.to(".imgwrapper ", {
   
    left: "40%",
    top: "237%",
    rotate: 5,
    },'rose');
    tl3.to(".thirdimagewrap ", {
    left: "26%",
    top: "130%",
    rotate: -1,
    },'rose');
  }
});

});






