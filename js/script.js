





const header = document.getElementById("menu-wrapper");

window.addEventListener(
  "scroll",
  (e) => {
    window.scrollY >= 100
      ? header.classList.add("sticky")
      : header.classList.remove("sticky");
  },
  { passive: true }
);

// window.onscroll = function () {
//   var top = window.scrollY;

//   if (top >= 50) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// };


// Hero parallax scroll

// var background_image_parallax = function($object, multiplier){
//   multiplier = typeof multiplier !== 'undefined' ? multiplier : 0.5;
// 	multiplier = 1 - multiplier;
//   var $doc = $(document);
//   $object.css({"background-attatchment" : "fixed"});
// 	$(window).scroll(function(){
// 	  var from_top = $doc.scrollTop(),
// 	      bg_css = '0px ' +(multiplier * from_top) + 'px';
// 	  $object.css({"background-position" : bg_css });
//   });
// };

//optional second value for speed
//background_image_parallax($(".hero-img"), 0.95);
// address the problem with the exposing upper part of the hero section



