const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  navMenu.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
    });
  });
}

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

function handleSubmit(e) {
  e.preventDefault();
  const status = document.getElementById("form-status");
  if (status) {
    status.textContent = "Thanks for reaching out! This demo form does not send emails yet.";
  }
  e.target.reset();
}
