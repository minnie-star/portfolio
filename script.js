function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
function toggleDarkMode() {
    const body = document.body;
    const darkModeIcon = document.getElementById("darkModeIcon");
    
    body.classList.toggle("dark-mode");
    
    if (body.classList.contains("dark-mode")) {
      darkModeIcon.src = "assets/vector 2.jpg";
      darkModeIcon.alt = "Light Mode";
      localStorage.setItem("darkMode", "enabled");
    } else {
      darkModeIcon.src = "./assets/moon.png";
      darkModeIcon.alt = "Dark Mode";
      localStorage.setItem("darkMode", null);
    }
  }
  
  // Check for saved user preference, if any, on load of the website
  document.addEventListener("DOMContentLoaded", function() {
    const darkModeIcon = document.getElementById("darkModeIcon");
    
    if (localStorage.getItem("darkMode") === "enabled") {
      document.body.classList.add("dark-mode");
      darkModeIcon.src = "assets/vector 2.jpg";
      darkModeIcon.alt = "Light Mode";
    }
  });  
// Select all navigation links
const navLinks = document.querySelectorAll('.nav-links a, .menu-links a');

// Add smooth scrolling behavior
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    
    // Close the mobile menu if it's open
    if (event.target.closest('.menu-links')) {
      toggleMenu();
    }
  });
});  