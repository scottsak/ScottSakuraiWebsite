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

window.addEventListener('load', function () {
console.log('done')
let box = document.querySelector('.carousel-inner');
let height = box.offsetHeight;
let desiredHeight = (height+60);
  document.querySelector(".carousel-inner").style.height = String(desiredHeight) + 'px';
})


// let box = document.querySelector('.carousel-inner');
// let height = box.offsetHeight;
// console.log(height)
// while (height === 0){
//   console.log("in loop")
//   document.querySelector(".carousel-inner").style.height = 'auto';
//   box = document.querySelector('.carousel-inner');
//   height = box.offsetHeight;
//   console.log(height)
// }
// console.log("out of loop")
// const desiredHeight = (height+60);
// console.log("desired height dblock: "+ desiredHeight)
// console.log("changed the height")
// document.querySelector(".carousel-inner").style.height = String(desiredHeight) + 'px';
// document.querySelector("carousel-inner").style.height = String(desiredHeight) + ' px';



