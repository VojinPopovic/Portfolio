
let hamburgerMedia = window.matchMedia("(max-width: 1200px)");

hamburgerMedia.addEventListener("change", function (mm) {
  if (mm.matches) {
    let hamburgerMenu = document.createElement("div");
    hamburgerMenu.className = "hamburger-menu";
    let hamburgerImg = document.createElement("img");
    hamburgerImg.src = "../Images/PinClipart.com_menu-clip-art_5328945.png";
    let mainNavContainer = document
      .querySelector(".main-nav-container")
      .append(hamburgerMenu);
    hamburgerMenu.appendChild(hamburgerImg);
    hamburgerImg.className = "hamburger-img";
  } else {
    hamburgerMedia.removeEventListener("change", mm);
    let removeHamburger = document.querySelector(".hamburger-menu");
    removeHamburger.remove();
  }
});
