
// Get all animation info items
const animationItems = document.querySelectorAll('.scroll-animation ');

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event and add animation class
function handleScroll() {
  animationItems.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add('animated');
    } else {
      item.classList.remove('animated');
    }
  });
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);

// Initial check in case elements are already in viewport on page load
handleScroll();



// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//when the user clikcs on a nav-link, collapse the navigation
document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".nav-link");
  var navToggler = document.querySelector(".offcanvas-title");
  
  navLinks.forEach(function (navLink) {
      navLink.addEventListener("click", function () {
          if (window.innerWidth < 992) {
              navToggler.click(); 
          }
      });
  });
});