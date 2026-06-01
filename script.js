const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const form = document.querySelector(".lead-form");
const formMessage = document.querySelector(".form-message");

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get("name") || "Thanks";
  formMessage.textContent = `${name}, you're on the tester list. We'll reach out with next steps.`;
  form.reset();
});
