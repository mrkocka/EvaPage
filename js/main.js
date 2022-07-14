// ScrollTopp Butto

$(window).scroll(function () {
  if ($(this).scrollTop() > 150) $(".gotopbtn").addClass("active");
  else $(".gotopbtn").removeClass("active");
});
$(".gotopbtn").click(function () {
  $("html, body").animate({ scrollTop: 0 });
});

// Menu Button

const openButton = document.getElementById("js-openButton");
const minusButton = document.getElementById("js-minusButton");
const mobilMenu = document.getElementById("js-mobilMenu");

//Open Menu
openButton.addEventListener("click", OpenMenu);
function OpenMenu() {
  console.log("Próba!");
  mobilMenu.classList.remove("menuInactive");
  openButton.classList.add("none");
  minusButton.classList.remove("none");
}

//Close Button
minusButton.addEventListener("click", closeMenu);

function closeMenu() {
  console.log("Zárom");
  mobilMenu.classList.add("menuInactive");
  minusButton.classList.add("none");
  openButton.classList.remove("none");

  return;
}

/// mobilMenuLink

const link =document.getElementsByClassName("mobilMenuLink");


let jsAbout = document.getElementById("js-about");
let jsconiact = document.getElementById("js-contact");


jsAbout.addEventListener("click", closeMenu);
jsconiact.addEventListener("click", closeMenu);


