(function () {
  const root = document.documentElement;
  root.classList.remove("no-js");

  const escapeHtml = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // ---------- Theme (昼 day / 夜 night) ----------
  const THEME_KEY = "portfolio-theme";
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") root.dataset.theme = saved;
  } catch (_) { /* storage unavailable: follow system preference */ }

  document.getElementById("theme-toggle").addEventListener("click", () => {
    const current = root.dataset.theme ||
      (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem(THEME_KEY, next); } catch (_) {}
  });

  // ---------- Mobile menu ----------
  const menuBtn = document.getElementById("menu-toggle");
  const links = document.getElementById("nav-links");
  const setMenu = (open) => {
    links.classList.toggle("is-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
  };
  menuBtn.addEventListener("click", () => setMenu(!links.classList.contains("is-open")));
  links.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });

  // ---------- Projects ----------
  const grid = document.getElementById("works-grid");
  grid.innerHTML = PROJECTS.map((p) => {
    const points = (p.points || []).map((pt) => `<li>${escapeHtml(pt)}</li>`).join("");
    const tech = (p.tech || []).map((t) => `<li>${escapeHtml(t)}</li>`).join("");
    const linkList = [
      p.repo && `<a href="${escapeHtml(p.repo)}" target="_blank" rel="noopener">Source ↗</a>`,
      p.live && `<a href="${escapeHtml(p.live)}" target="_blank" rel="noopener">Live ↗</a>`,
    ].filter(Boolean).join("");
    return `
      <div class="ema-wrap reveal">
        <article class="ema">
          <span class="ema__hole" aria-hidden="true"></span>
          <div class="ema__top">
            <span class="ema__kanji" aria-hidden="true">${escapeHtml(p.kanji || "作")}</span>
            <div class="ema__date">
              ${escapeHtml(p.date || "")}
              ${p.status ? `<br><span class="ema__status">${escapeHtml(p.status)}</span>` : ""}
            </div>
          </div>
          <h3>${escapeHtml(p.title)}</h3>
          ${p.subtitle ? `<p class="ema__subtitle">${escapeHtml(p.subtitle)}</p>` : ""}
          ${p.description ? `<p class="ema__desc">${escapeHtml(p.description)}</p>` : ""}
          ${points ? `<ul>${points}</ul>` : ""}
          ${tech ? `<ul class="tags">${tech}</ul>` : ""}
          ${linkList ? `<div class="ema__links">${linkList}</div>` : ""}
        </article>
      </div>`;
  }).join("");

  // ---------- Social links ----------
  document.getElementById("socials").innerHTML = SOCIALS
    .filter((s) => s.url)
    .map((s) => `<li><a href="${escapeHtml(s.url)}" target="_blank" rel="noopener">${escapeHtml(s.label)}</a></li>`)
    .join("");

  document.getElementById("year").textContent = new Date().getFullYear();

  // ---------- Reveal on scroll ----------
  const revealables = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealables.forEach((el) => io.observe(el));

    // Highlight the nav link of the section in view
    const navLinks = [...links.querySelectorAll("a")];
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + entry.target.id));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("section[id]").forEach((s) => spy.observe(s));
  } else {
    revealables.forEach((el) => el.classList.add("is-visible"));
  }

  // ---------- Sakura petals ----------
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const layer = document.querySelector(".petals");
    const count = window.innerWidth < 600 ? 10 : 18;
    for (let i = 0; i < count; i++) {
      const p = document.createElement("span");
      p.className = "petal";
      const size = 8 + Math.random() * 8;
      p.style.left = Math.random() * 100 + "vw";
      p.style.width = size + "px";
      p.style.height = size * 0.8 + "px";
      p.style.animationDuration = 11 + Math.random() * 12 + "s";
      p.style.animationDelay = -Math.random() * 20 + "s";
      p.style.setProperty("--sway", (Math.random() * 160 - 80).toFixed(0) + "px");
      p.style.opacity = (0.45 + Math.random() * 0.4).toFixed(2);
      layer.appendChild(p);
    }
  }
})();
