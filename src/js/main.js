var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


// function opneNav(){
//   document.getElementById("mobileNav").style.width ="100%"
// }

// function closeNav(){
//   document.getElementById("mobileNav").style.width ="0%"
// }
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


$(document).ready(function(){
  $('.slider').bxSlider({
    auto:true,
    
  });
});

$(".progress-bar").loading();

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      items:4,
      loop:true,
      autoplay:true,
  });
});