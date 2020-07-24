// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function toggle_visibility(id) {
  var e = document.getElementById(id);
  $(".pg1").click(function () {
    $("#page1").show();
    $("#page2").hide();
    $("#page3").hide();
    $("#page4").hide();
    $("#page5").hide();
  });
  $(".pg2").click(function () {
    $("#page1").hide();
    $("#page2").show();
    $("#page3").hide();
    $("#page4").hide();
    $("#page5").hide();
  });
  $(".pg3").click(function () {
    $("#page1").hide();
    $("#page2").hide();
    $("#page3").show();
    $("#page4").hide();
    $("#page5").hide();
  });
  $(".pg4").click(function () {
    $("#page1").hide();
    $("#page2").hide();
    $("#page3").hide();
    $("#page4").show();
    $("#page5").hide();
  });
  $(".pg5").click(function () {
    $("#page1").hide();
    $("#page2").hide();
    $("#page3").hide();
    $("#page4").hide();
    $("#page5").show();
  });
  if(e.style.display == 'block')
    e.style.display = 'none';
  else
    e.style.display = 'block';
}