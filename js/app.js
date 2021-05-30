let humburger = document.querySelector("#humburger");
let navList = document.querySelector("#nav-list");

let toggleNav = () => {
  console.log("hide and show nav");
  navList.classList.toggle("show");
};

humburger.addEventListener("click", toggleNav);

let progress_line = document.querySelector(".progress");
let progress_line_y = document.querySelector(".progress_y");
// copied from internet
const debounce = (func, delay) => {
  let inDebounce;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
};

function createScrollLine() {
  console.count("scrolling");
  const windowHeight = window.innerHeight;
  const bodyHeight = document.body.clientHeight;
  const scrolled = window.scrollY;
  const percentageScrolled = (scrolled / (bodyHeight - windowHeight)) * 100;
  console.log(percentageScrolled);

  progress_line.style.width = `${percentageScrolled}%`;
}

function createScrollLineY() {
  console.count("scrolling");
  const windowHeight = window.innerHeight;
  const bodyHeight = document.body.clientHeight;
  const scrolled = window.scrollY;
  const percentageScrolled = (scrolled / (bodyHeight - windowHeight)) * 100;
  console.log(percentageScrolled);

  progress_line_y.style.height = `${percentageScrolled}%`;
}

//window.addEventListener( "scroll", createScrollLine );
// make some delay to the function call
window.addEventListener("scroll", debounce(createScrollLine, 250));

window.addEventListener("scroll", debounce(createScrollLineY, 250));
