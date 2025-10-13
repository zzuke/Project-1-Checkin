document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-icon");
  const mobileMenu = document.getElementById("mobileMenu");

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
});
