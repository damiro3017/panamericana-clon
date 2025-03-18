document.addEventListener("DOMContentLoaded", () => {
  const openButton = document.querySelector(".open-btn");
  const closeButton = document.querySelector(".close-btn");
  const navbar = document.querySelector(".header__navbar");
  const searchInput = document.getElementById("search");
  const searchButton = document.querySelector(".header__search-btn");

  if (openButton && navbar) {
    openButton.addEventListener("click", () => {
      navbar.classList.add("active");
    });
  }

  if (closeButton && navbar) {
    closeButton.addEventListener("click", () => {
      navbar.classList.remove("active");
    });
  }

  if (searchButton && searchInput) {
    searchButton.addEventListener("click", () => {
      searchInput.focus();
    });
  }
});
