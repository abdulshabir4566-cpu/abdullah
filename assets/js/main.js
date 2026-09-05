const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

const cursor = document.querySelector(".cursor");
const cursorDot = document.querySelector(".cursor-dot");
if (cursor && cursorDot && window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener("mousemove", (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
    cursorDot.style.left = `${event.clientX}px`;
    cursorDot.style.top = `${event.clientY}px`;
  });

  document.querySelectorAll("a, button, input, select, textarea").forEach((el) => {
    el.addEventListener("mouseenter", () => cursor.classList.add("is-hover"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("is-hover"));
  });
}

const toggle = document.querySelector(".nav__toggle");
const menu = document.querySelector(".mobile-menu");
toggle?.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!open));
  menu.hidden = open;
  document.body.classList.toggle("menu-open", !open);
});

menu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.hidden = true;
    toggle?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  });
});

const form = document.getElementById("contact-form");
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const status = form.querySelector(".form-status");
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const message = String(data.get("message") || "").trim();

  if (!name || !email || !message) {
    status.textContent = "Please complete name, email, and message.";
    return;
  }

  status.textContent = "Thank you. I’ll reply within two business days.";
  form.reset();
});
