//jshint esversion:6
function openExperience(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


//carousel
window.addEventListener('load', function () {
let box = document.querySelector('.carousel-inner');
let height = box.offsetHeight;
let desiredHeight = (height+60);
  document.querySelector(".carousel-inner").style.height = String(desiredHeight) + 'px';
})



