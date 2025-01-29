const navbar = document.getElementById("navbar");
const anchors = document.getElementsByTagName("a");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    for (let anchor of anchors) {
      anchor.classList.add("scrolled");
    }
  } else {
    navbar.classList.remove("scrolled");
    for (let anchor of anchors) {
      anchor.classList.remove("scrolled");
    }
  }
});
