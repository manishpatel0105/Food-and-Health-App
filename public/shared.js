// ─────────────────────────────────────────────
//  NutriMind AI — Shared Utilities
// ─────────────────────────────────────────────

// 1. Tailwind design token config (shared across all pages)
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface":                "#070e1b",
        "surface-dim":            "#070e1b",
        "surface-container-lowest": "#000000",
        "surface-container-low":  "#0c1322",
        "surface-container":      "#11192a",
        "surface-container-high": "#172031",
        "surface-container-highest": "#1c2639",
        "surface-bright":         "#222c41",
        "surface-variant":        "#1c2639",
        "background":             "#070e1b",
        "on-background":          "#e2e8fb",
        "on-surface":             "#e2e8fb",
        "on-surface-variant":     "#a5abbd",
        "outline":                "#6f7586",
        "outline-variant":        "#414857",
        "primary":                "#df8eff",
        "primary-dim":            "#bb00fc",
        "primary-container":      "#d878ff",
        "primary-fixed":          "#d878ff",
        "primary-fixed-dim":      "#d061ff",
        "on-primary":             "#4f006d",
        "on-primary-container":   "#3d0055",
        "on-primary-fixed":       "#000000",
        "on-primary-fixed-variant": "#4b0068",
        "secondary":              "#00eefc",
        "secondary-dim":          "#00deec",
        "secondary-container":    "#006970",
        "secondary-fixed":        "#00eefc",
        "secondary-fixed-dim":    "#00deec",
        "on-secondary":           "#005359",
        "on-secondary-container": "#e3fdff",
        "on-secondary-fixed":     "#003f43",
        "on-secondary-fixed-variant": "#005e64",
        "tertiary":               "#ff6e81",
        "tertiary-dim":           "#e7004c",
        "tertiary-container":     "#ff0355",
        "tertiary-fixed":         "#ff909b",
        "tertiary-fixed-dim":     "#ff7989",
        "on-tertiary":            "#490012",
        "on-tertiary-container":  "#000000",
        "on-tertiary-fixed":      "#39000c",
        "on-tertiary-fixed-variant": "#780023",
        "error":                  "#ff6e84",
        "error-dim":              "#d73357",
        "error-container":        "#a70138",
        "on-error":               "#490013",
        "on-error-container":     "#ffb2b9",
        "surface-tint":           "#df8eff",
        "inverse-surface":        "#f9f9ff",
        "inverse-primary":        "#9a00d0",
        "inverse-on-surface":     "#4e5565",
      },
      fontFamily: {
        headline: ["Space Grotesk"],
        body:     ["Inter"],
        label:    ["Space Grotesk"],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg:      "0.25rem",
        xl:      "0.5rem",
        full:    "0.75rem",
      },
    },
  },
};

// ─────────────────────────────────────────────
// 2. Bottom Navigation Injector
// Usage: call injectNav("dash"|"scan"|"insights"|"profile") in each page
// ─────────────────────────────────────────────
function injectNav(active) {
  const items = [
    { id: "dash",     href: "index.html",        icon: "grid_view",           label: "DASH" },
    { id: "scan",     href: "food_scanner.html",  icon: "center_focus_strong", label: "SCAN" },
    { id: "insights", href: "insights.html",      icon: "analytics",           label: "DATA" },
    { id: "profile",  href: "profile.html",       icon: "person",              label: "BIO"  },
  ];

  const navHTML = `
    <nav id="bottom-nav" class="fixed bottom-0 left-0 w-full h-20 bg-[#070e1b]/70 backdrop-blur-2xl border-t border-[#00eefc]/10 flex justify-around items-center px-4 pb-4 z-50" style="box-shadow:0 -8px 24px rgba(0,238,252,0.05)">
      ${items.map(item => {
        const isActive = item.id === active;
        const activeClass = isActive
          ? "text-[#df8eff] drop-shadow-[0_0_8px_rgba(223,142,255,0.6)] scale-110"
          : "text-slate-500 opacity-60 hover:text-[#00eefc] hover:opacity-100 transition-all";
        const fillStyle = isActive ? "font-variation-settings:'FILL' 1;" : "";
        return `
          <a href="${item.href}" class="flex flex-col items-center justify-center ${activeClass} active:scale-90 duration-150 select-none">
            <span class="material-symbols-outlined" style="${fillStyle}">${item.icon}</span>
            <span class="font-label text-[10px] uppercase tracking-[0.1em] mt-0.5">${item.label}</span>
          </a>`;
      }).join("")}
    </nav>`;

  document.body.insertAdjacentHTML("beforeend", navHTML);
}

// ─────────────────────────────────────────────
// 3. API Utility
// ─────────────────────────────────────────────
const API_BASE = "";

async function apiPost(endpoint, body = {}) {
  const res = await fetch(API_BASE + endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function apiGet(endpoint) {
  const res = await fetch(API_BASE + endpoint);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}
