var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname) {
        for (tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }


// Skill Progress Animation
document.addEventListener("DOMContentLoaded", function () {
    let skillBars = document.querySelectorAll(".skill-progress");

    function animateBars() {
        skillBars.forEach(bar => {
            let width = bar.getAttribute("data-width"); 
            bar.style.transition = "width 2s ease-in-out";
            bar.style.width = width; 
        });
    }

    // Start animation when mouse enters the skills section
    document.querySelector(".skills-container").addEventListener("mouseenter", animateBars);
});

    


// Scroll Animation for Skills
const skillItems = document.querySelectorAll(".skill-item");

const showSkills = () => {
    const triggerBottom = window.innerHeight * 0.8;
    skillItems.forEach((item) => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < triggerBottom) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
};

window.addEventListener("scroll", showSkills);

// Trigger animation on load
document.addEventListener("DOMContentLoaded", showSkills);


// Scroll Animation for Experience and Education
const experienceItems = document.querySelectorAll(".experience-item");
const educationItems = document.querySelectorAll(".education-item");

const showSections = () => {
    const triggerBottom = window.innerHeight * 0.8;

    experienceItems.forEach((item) => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < triggerBottom) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });

    educationItems.forEach((item) => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < triggerBottom) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
};

window.addEventListener("scroll", showSections);

// Trigger animation on load
document.addEventListener("DOMContentLoaded", showSections);



// Hamburger menu toggle
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navbarMenu = document.querySelector('.navbar ul');

hamburgerMenu.addEventListener('click', () => {
  navbarMenu.classList.toggle('show'); 
});


// Email JS
emailjs.init("9_sg2XfIf7ukRRXX_"); 

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("service_os5c7tn", "template_kywm15f", this)
      .then(function(response) {
          alert("Email sent successfully!");
          document.getElementById("contact-form").reset();
      }, function(error) {
          alert("Failed to send email.");
          console.log(error);
      });
});



// Hide Logo on Scroll
window.addEventListener("scroll", function () {
    let logo = document.getElementById("logo");
    let screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
        if (window.scrollY > 50) { 
            logo.classList.add("hidden");
        } else {
            logo.classList.remove("hidden");
        }
    }
});






// Light/Dark Mode
// Select the theme toggle button
const themeToggleBtn = document.getElementById("theme-btn");
const currentTheme = localStorage.getItem("theme");

// Apply the stored theme on page load
if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
} else {
    document.documentElement.setAttribute("data-theme", "light");
}

// Toggle theme function
function switchTheme() {
    let theme = document.documentElement.getAttribute("data-theme");
    if (theme === "dark") {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    }
}

// Add event listener to the button
themeToggleBtn.addEventListener("click", switchTheme);








