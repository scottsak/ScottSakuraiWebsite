//jshint esversion:6
function openCity(evt, cityName) {
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
let box = document.querySelector('.d-block');
let width = box.offsetWidth;
let height = box.offsetHeight;
const desiredHeight = (height+60);
console.log("desired height dblock: "+ desiredHeight)
document.querySelector(".carousel-inner").style.height = String(desiredHeight) + 'px';
if(desiredHeight === 60){
  let box = document.querySelector('.d-block');
  let height = box.offsetHeight;
  const desiredHeight = (height+60);
  console.log(height)
  console.log("desired height dblock in if statement: "+ desiredHeight)
  document.querySelector(".carousel-inner").style.height = String(desiredHeight) + 'px';
}
// document.querySelector("carousel-inner").style.height = String(desiredHeight) + ' px';



