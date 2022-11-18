document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelectorAll(".nav .nav-link").forEach(function (element) {
    element.addEventListener("click", function (e) {
      let nextEl = element.nextElementSibling;
      let parentEl = element.parentElement;

      if (nextEl) {
        e.preventDefault();
        let mycollapse = new bootstrap.Collapse(nextEl);

        if (nextEl.classList.contains("show")) {
          mycollapse.hide();
        } else {
          mycollapse.show();
          // find other submenus with class=show
          var opened_submenu =
            parentEl.parentElement.querySelector(".submenu.show");
          // if it exists, then close all of them
          if (opened_submenu) {
            new bootstrap.Collapse(opened_submenu);
          }
        }
      }
    });
  });

  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId);

    const links = nav.getElementsByClassName("nav_link");
    const listnav = nav.classList;

    // Validate that all variables exist
    if (toggle && nav && bodypd && headerpd) {
      for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", () => {
          console.log(listnav);
          if (!listnav.contains("show")) {
            nav.classList.toggle("show");
          }
          // else{
          //     nav.classList.toggle('show');
          // }
          // headerpd.classList.toggle('body-pd')
        });
      }
    }
  };
  // show navbar
  // change icon
  // toggle.classList.toggle('bx-x')

  // add padding to body
  // bodypd.classList.toggle('body-pd')
  // add padding to header

  showNavbar("header-toggle", "nav-bar", "body-pd", "header");

  /*===== LINK ACTIVE =====*/
  const linkColor = document.querySelectorAll(".nav_link");

  function colorLink() {
    if (linkColor) {
      linkColor.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    }
  }
  linkColor.forEach((l) => l.addEventListener("click", colorLink));

  // Your code to run since DOM is loaded and ready
  console.log("js is running");
});



const search = document.getElementById("search");
const popUp=()=>{
  const popup = document.getElementsByClassName('search-container');
  console.log(popup)
const style=window.getComputedStyle(popup[0])
document.getElementById("input-search").focus;
if (style.display=="none"){
  popup[0].style.display="block";
}
else{
  popup[0].style.display="none";

}
document.getElementById("input-search").focus();



}
search.addEventListener("click", function () {
  console.log("search clicked");
});

document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "k" && e.ctrlKey) {
    console.log(`successful`);
    e.preventDefault();
    e.stopPropagation();
    popUp();
  } 
  if (e.key.toLowerCase()==="escape" ){
    e.preventDefault();
    popUp();
  }
  console.log(e.key);
  return false;
});




const newT=document.getElementById("searchh");
var string=" " + newT.value;
var wholeString =string+newT.value;
console.log(string);