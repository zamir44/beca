



gsap.registerPlugin(ScrollTrigger)

function init(){

    gsap.from('.rectangle', {opacity: 0, duration:10, scrollTrigger: {
        trigger: '.rectangle',
        scrub: true,
        start: 'top bottom-=100',
        end: 'bottom bottom-=50',
       
    }})

}

window.addEventListener('load', function(){
    init();
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".right__circle", {
  scrollTrigger: {
  trigger: '.right__circle',
  start: "top 400px",
  end: "400",
  toggleActions: "restart pause reverse",
//   pin: true, //pins it (sticks it to a point)
//   pinSpacing: false,
//number of pixels to pin the given element
  markers: true
  
},
    
});


let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.dark',
        start: "20px 80%",
        end: "bottom 100px",
        

    }
});

tl.from("imge", { x: 200, opacity: 0, duration: 1})
    .from(".content", {y: 300, opacity: 0, duration: 2}, "-=1") //start -1 sec earlier thn you normally would have by default