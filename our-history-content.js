gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#scene",
        start: "top top",
        end: "+=3000",
        scrub: true,
        pin: true,
    }
});

tl.to("#bigBang", { r: 50, duration: 2 }, "<")
    .to("#label-bigbang", { opacity: 1, duration: 0.5 }, "<")
    .to("#bigBang", { opacity: 0.3, duration: 1 }, ">")
    .to("#stars", { opacity: 1, duration: 1 })
    .to("#label-bigbang", { opacity: 0, duration: 0.5 }, "<")
    .to("#label-stars", { opacity: 1, duration: 0.5 }, "<")
    .to("#scene", { attr: { viewBox: "60 30 20 20" }, duration: 2 })
    .to("#sun", { opacity: 1, duration: 1 }, "<")
    .to("#bigBang", { opacity: 0, duration: 2 }, "<")
    .to("#label-stars", { opacity: 0, duration: 0.5 }, "<")
    .to("#label-sun", { opacity: 1, duration: 0.5 }, "<")
    .to("#scene", { attr: { viewBox: "74.5 39.5 1 1" }, duration: 2 })
    .to("#earth", { opacity: 1, duration: 2 }, "<")
    .to("#label-sun", { opacity: 0, duration: 0.5 }, "<")
    .to("#label-earth", { opacity: 1, duration: 0.5 }, "<");