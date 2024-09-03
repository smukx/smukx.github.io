//JavaScript code

window.onload = function() {
const logo = document.querySelector('.logo img');

logo.addEventListener('click', function() {
  // alert('This page is Redirecting to a Main one.. Click ok to proceed!');
  location.href=("./home.html")
  // alert('Welcome to Smukx Blog');

});
}

document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');

  navToggle.addEventListener('click', function () {
      navList.classList.toggle('nav-active');
  });
});








  
