let humburger = document.querySelector("#humburger");
let navList = document.querySelector("#nav-list");

let toggleNav = () => {
  console.log("hide and show nav");
  navList.classList.toggle("show");
};

humburger.addEventListener("click", toggleNav);
