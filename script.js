// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika stock menu di click
document.querySelector("#stock-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const stock = document.querySelector("#stock-menu");

document.addEventListener("click", function (e) {
  if (!stock.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
