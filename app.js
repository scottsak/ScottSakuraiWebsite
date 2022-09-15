//jshint esversion:6

//experience tab
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

//hamburger menu
function openSideBar(x) {
  x.classList.toggle('change');

  const sideBar = document.getElementById('side-bar');
  const body = document.getElementsByTagName('body')[0];
  sideBar.classList.toggle('open-nav');
  body.classList.toggle('no-scroll');
  page.classList.toggle('blur');
  navBarOpened = true;
}

function closeSideBar() {
  const sideBar = document.getElementById('side-bar');
  const body = document.getElementsByTagName('body')[0];
  const button = document.getElementsByClassName('change')[0];
  sideBar.classList.remove('open-nav');
  body.classList.remove('no-scroll');
  page.classList.remove('blur');
  button.classList.remove('change');
  navBarOpened = false;
}
