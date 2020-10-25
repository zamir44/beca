
//*** STICKY NAVIGATION ***//
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

//*** THUMBNAIL MANIPULATION ***//
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

$(window).scroll(function() {  
  var scr = $(window).scrollTop();
  var height = 300;
  if(scr > height) {
     $(document.body).addClass('fix-clouds'); /* add the class on scroll */
  } else {
     $(document.body).removeClass('fix-clouds'); /* remove when we go back to top */
  }
});

//*** iMASK ***//
$(document).ready(function() {
  $('#phone').mask("(999) 999-999", {placeholder:"_________"})
});



