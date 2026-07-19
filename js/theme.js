
/*
# ============================================
# 11. theme.js — Dark/Light Mode Manager
# ============================================
#theme_js = '''/* ═══════════════════════════════════════════
#   AURA AI OS — Theme Manager
#   Dark/Light mode with system preference detection
   ═══════════════════════════════════════════ */

const AuraTheme = (function() {
  'use strict';

  const STORAGE_KEY = 'aura-theme';

  function getSystemPreference() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function getSavedTheme() {
    return localStorage.getItem(STORAGE_KEY);
  }

  function getCurrentTheme() {
    return getSavedTheme() || getSystemPreference();
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);

    // Dispatch custom event
    window.dispatchEvent(new CustomEvent('aurathemechange', {
      detail: { theme }
    }));
  }

  function toggleTheme() {
    const current = getCurrentTheme();
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
  }

  function init() {
    // Apply saved or system theme on load
    const theme = getCurrentTheme();
    setTheme(theme);

    // Theme toggle button
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', toggleTheme);
    }

    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!getSavedTheme()) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  return {
    getCurrentTheme,
    setTheme,
    toggleTheme,
    init
  };
})();

