const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function first_page_anim(){
  var tl = gsap.timeline();

  tl.from('#nav',{
    y: '-10',
    opacity:0,
    duration: 1.5,
    ease: Expo.easeInOut
  })
  .to('.bounding-elem',{
    y:0,
    ease: Expo.easeInOut,
    delay: -1,
    duration: 2,
    stagger:0.2
  })
  .from('#hero-footer',{
    y:-10,
    opacity:0,
    duration: 1.5,
    delay: -1,
    ease: Expo.easeInOut
  })
}

function circle_skew(){
  // define default scale values
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;
  window.addEventListener("mousemove",function(dets){
    xscale = gsap.utils.clamp(.8,1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(.8,1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    mini_circle(xscale,yscale)
    
  })
}
circle_skew()

first_page_anim()
function mini_circle(xscale,yscale){
  window.addEventListener("mousemove", function(dets){
    document.querySelector("#mini-circle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale}, ${yscale})`
  })
}
mini_circle()


document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});