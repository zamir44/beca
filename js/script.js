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

const employee_wrapper = document.querySelector(".employers-images");
let employees = [];

fetch("../data/employees.json")
  .then((res) => res.json())
  .then((data) => {
    data.items.forEach((employee) => {
      let item = document.createElement("a");
      item.classList.add("employer");

      item.setAttribute("data-name", employee.name);
      item.setAttribute("data-image", employee.image);
      item.setAttribute("data-position", employee.position);
      item.setAttribute("data-description", employee.description);

      item.innerHTML = `
          <img src="${employee.thumbnail}">
      `;

      employee_wrapper.appendChild(item);
    });

    loadEmpoloyee();
  });

function loadEmpoloyee() {
  const employeers = document.querySelectorAll(".employer");
  const employer_name = document.getElementById("employer--name");
  const employer_img = document.getElementById("employer--image");
  const employer_position = document.getElementById("employer--position");
  const employer_description = document.getElementById("employer--description");

  employeers.forEach((employee) => {
    employee.addEventListener("click", (e) => {
      e.preventDefault();

      employer_name.innerHTML = employee.dataset.name;
      employer_img.src = employee.dataset.image;
      employer_position.innerHTML = employee.dataset.position;
      employer_description.innerHTML = employee.dataset.description;
    });
  });
}

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
