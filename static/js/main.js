document.addEventListener("DOMContentLoaded", () => {
  // ✅ AOS init
  if (window.AOS) {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }

  // ✅ Preloader
  const preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.style.display = "none";
    }, 1000);
  }

  // ✅ Navbar scroll effect
  const navbar = document.querySelector(".navbar");
  function handleScroll() {
    if (window.scrollY > 50) {
      navbar?.classList.add("navbar-scrolled");
    } else {
      navbar?.classList.remove("navbar-scrolled");
    }
  }
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // initial
});
