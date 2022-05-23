/* Hide/Show navbar related when scrolling */
let lastScrollPosition = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPosition = window.pageYOffset;
  if (lastScrollPosition > currentScrollPosition) {
    document.querySelector(".main-header").style.top = "0";
  } else {
    document.querySelector(".main-header").style.top = "-100px";
  }
  lastScrollPosition = currentScrollPosition;
}