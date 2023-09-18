Shery.mouseFollower();
Shery.makeMagnet(".magnet");
// Shery.hoverWithMediaCircle(".hvr", {videos: ["./1.mp4","./2.mp4","./3.mp4"]});
Shery.hoverWithMediaCircle(".hoverWithMedia",{
    videos: [
        "videos/1.mp4",
        "videos/2.mp4",
        "videos/3.mp4"
    ]
});

gsap.to(".fleftelm", {
    scrollTrigger: {
        trigger:"#fimages",
        pin:true,
        start:"top top",
        end:"bottom bottom",
        endTrigger: ".last",
        scrub: 1,
    },
    y: "-300%",
    ease: Power1,
});

let sections = document.querySelectorAll(".fleftelm");
Shery.imageEffect(".images", {
  style: 4,
  config: { onMouse: { value:1 } },
  slideStyle: (setScroll) => {
    sections.forEach(function (sections, index){
        ScrollTrigger.create({
            trigger:sections,
            start:"top top",
            scrub:1,
            onUpdate: function(prog){
              setScroll(prog.progress+index)
            }
        })
    })
  },
});






// sections.forEach(function (section, index) {
//     ScrollTrigger.create({
//       trigger: section,
//       start: "top top",
//       scrub: 1,
//       onUpdate: function (prog) {
//         setScroll(prog.progress + index);
//       },
//     });
//   });