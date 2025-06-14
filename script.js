const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add('active');
    }
  });
});

const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.add('theme-transition');
  document.body.classList.toggle('dark-mode');
  setTimeout(() => document.body.classList.remove('theme-transition'), 800);
});


const interestsSection = document.querySelector('.interests-section');
const interestItems = document.querySelectorAll('.interest');

interestItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    const bg = item.getAttribute('data-bg');
    interestsSection.style.backgroundImage = `url('${bg}')`;
  });

  item.addEventListener('mouseleave', () => {
    interestsSection.style.background = ''; // Clear inline style
  });
 
  item.addEventListener('click', () => {
    const bg = item.getAttribute('data-bg');
    interestsSection.style.backgroundImage = `url('${bg}')`;
  });
});



const cursor = document.querySelector(".custom-cursor");

// Track cursor position and add stretching
document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;

  const stretchX = 1 + Math.min(Math.abs(e.movementX || 0) * 0.05, 1.3);
  const stretchY = 1 + Math.min(Math.abs(e.movementY || 0) * 0.05, 1.3);

  cursor.style.transform = `translate(-50%, -50%) scale(${stretchX}, ${stretchY})`;
});

// Add hover effect on interactive elements
const interactiveElements = document.querySelectorAll("a, button, .footer-tile, .project, .skill");

interactiveElements.forEach((el) => {
  el.addEventListener("mouseenter", () => cursor.classList.add("hover-active"));
  el.addEventListener("mouseleave", () => cursor.classList.remove("hover-active"));
});







