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
        start: "top 50%",
       end: "+=100%",
       toggleActions: "play none none reverse",
      fastScrollEnd: true,}
})