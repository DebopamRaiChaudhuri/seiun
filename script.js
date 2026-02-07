gsap.registerPlugin(SplitText, ScrollTrigger);

// const splithero = new SplitText(".herotxt h1", {
//   type: "chars"
// });
// let chars = splithero.chars;

// gsap.from(chars, {
//  yPercent: 100,
//     stagger: 0.05,
//     opacity: 0,
//     duration: 1,
//     ease: "back.out(1.7)"
// });
const splitheropara = new SplitText(".herotxt p", {
  type: "chars"
});
let charspara = splitheropara.chars;

gsap.from(charspara, {
 yPercent: 100,
    stagger: 0.05,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".herotxt p",
        start: "-140% 50%",
       end: "40% 50%",
       toggleActions: "play none none reverse",
      fastScrollEnd: true,}
})
const splitdes = new SplitText(".description", {
  type: "lines"
});
let linesdes = splitdes.lines;

gsap.from(linesdes, {
 yPercent: 100,
    stagger: 0.05,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".description",
        start: "-140% 50%",
       end: "40% 50%",
       toggleActions: "play none none reverse",
      fastScrollEnd: true,}
})
const splittoday = new SplitText(".today", {
  type: "lines"
});
let linestoday = splittoday.lines;

gsap.from(linestoday, {
 yPercent: 100,
    stagger: 0.05,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".today",
        start: "-140% 50%",
       end: "40% 50%",
       toggleActions: "play none none reverse",
      fastScrollEnd: true,}
})