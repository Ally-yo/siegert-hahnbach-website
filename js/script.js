(() => {
  const body = document.body;
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const open = body.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
    });
    navMenu.addEventListener("click", event => {
      if (event.target.closest("a")) {
        body.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  document.querySelectorAll('a[href^="index.html#"], a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const raw = link.getAttribute("href") || "";
      const id = raw.replace("index.html", "").replace("#", "");
      const target = document.getElementById(id);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.pushState(null, "", "#" + id);
      }
    });
  });

  const slides = [...document.querySelectorAll("[data-slide]")];
  const dots = [...document.querySelectorAll("[data-slide-dot]")];
  let current = 0;
  let timer = null;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function showSlide(index) {
    if (!slides.length) return;
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle("is-active", i === current));
    dots.forEach((dot, i) => dot.classList.toggle("is-active", i === current));
  }

  function restartTimer() {
    if (timer) clearInterval(timer);
    if (!reducedMotion && slides.length > 1) timer = setInterval(() => showSlide(current + 1), 7000);
  }

  document.querySelector("[data-slide-next]")?.addEventListener("click", () => { showSlide(current + 1); restartTimer(); });
  document.querySelector("[data-slide-prev]")?.addEventListener("click", () => { showSlide(current - 1); restartTimer(); });
  dots.forEach(dot => dot.addEventListener("click", () => { showSlide(Number(dot.dataset.slideDot)); restartTimer(); }));
  restartTimer();

  const tabs = [...document.querySelectorAll("[data-menu-tab]")];
  const panels = [...document.querySelectorAll("[data-menu-panel]")];
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const selected = tab.dataset.menuTab;
      tabs.forEach(item => {
        const active = item === tab;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-selected", String(active));
      });
      panels.forEach(panel => {
        const active = panel.dataset.menuPanel === selected;
        panel.classList.toggle("is-active", active);
        panel.hidden = !active;
      });
    });
  });
})();