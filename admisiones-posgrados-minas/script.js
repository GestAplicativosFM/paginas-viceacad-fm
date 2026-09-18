document.querySelectorAll(".accordion-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const panel = document.getElementById(btn.getAttribute("aria-controls"));
    const isOpen = btn.getAttribute("aria-expanded") === "true";

    btn.setAttribute("aria-expanded", String(!isOpen));
    panel.classList.toggle("is-open", !isOpen);
    btn.querySelector(".accordion-icon").classList.toggle("tw:rotate-90", !isOpen);

    if (!isOpen) {
      btn.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
