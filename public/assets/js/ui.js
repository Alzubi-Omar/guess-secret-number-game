import { getCurrentYear } from "./utils.js";

export const updateCopyrightYear = (elementId = "currentYear") => {
  const yearEl = document.getElementById(elementId);
  if (!yearEl) return;
  yearEl.textContent = `© ${getCurrentYear()}`;
};
