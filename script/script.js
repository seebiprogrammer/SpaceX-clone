const menuIcon = document.querySelector(".menuicon");
const overlay = document.querySelector(".overlay");
const iconMenu = document.querySelector(".hidden-menu");
const counters = document.querySelectorAll(".counter");
let scrollStarted = false;

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("open");
  overlay.classList.toggle("open");
  iconMenu.classList.toggle("open");
});

document.addEventListener("scroll", scrollPage);

function scrollPage() {
  const scrollPos = window.scrollY;
  if ((scrollPos > 200) & !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if ((scrollPos < 200) & scrollStarted) {
    reset();
    scrollStarted = false;
  }
}

function countUp() {
  counters.forEach((counter) => {
    counter.innerText = "0";

    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const c = +counter.innerText;

      const increment = target / 100;

      if (c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`;

        setTimeout(updateCounter, 75);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

function reset() {
  counters.forEach((counter) => (counter.innerHTML = "0"));
}
