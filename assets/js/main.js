/*=============== STICKY HEADER ===============*/
const myHeader = document.querySelector("#header");
window.addEventListener("scroll", stickyHeader);
function stickyHeader() {
  if (window.scrollY > 150) {
    myHeader.classList.add("sticky");
  } else {
    myHeader.classList.remove("sticky");
  }
}
/*=============== SHOW MENU ===============*/
const toggleMenus = Array.from(document.querySelectorAll(".toggle-icon"));
toggleMenus.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("pushed");
  });
});
/*=============== THEME SWITCH DARK || LIGHT  ===============*/
let toggleThemeItems = document.querySelectorAll(".toggle-theme");
let toggleThemeIcons = document.querySelectorAll(".toggle-theme-icon");
toggleThemeItems.forEach((element) => {

  element.addEventListener("click", (e) => {
    changeTheme("light-theme");
  });

  // Theme localstorage
  const isLightThemeEnabled =
    localStorage.getItem("lightThemeEnabled") === "true";
  // Apply light theme if preference is set to true
  if (isLightThemeEnabled) {
    document.querySelector("body").classList.add("light-theme");
  }
});

function changeTheme(toggleClass) {
  document.body.classList.toggle(toggleClass);
  const isLightThemeEnabled = document.body.classList.contains("light-theme");
  localStorage.setItem("lightThemeEnabled", isLightThemeEnabled);

  // Chnage Icon type moon || sunny 
  if (document.body.classList.contains("light-theme")) {
    toggleThemeIcons.forEach((element) => {
      element.setAttribute("name", "moon-outline");
    });
  } else {
    toggleThemeIcons.forEach((element) => {
      element.setAttribute("name", "sunny-outline");
    });
  }
}


/*=============== REMOVE MENU MOBILE ===============*/
/*=============== SWIPER PROJECTS ===============*/

/*=============== SWIPER TESTIMONIAL ===============*/

/*=============== EMAIL JS ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
