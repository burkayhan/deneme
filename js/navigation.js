
/*import os

output_dir = "/mnt/agents/output/aura-ai-os"

# ============================================
# 10. navigation.js — Sidebar Navigation Builder
# ============================================
navigation_js = '''/* ═══════════════════════════════════════════
   AURA AI OS — Navigation
   Sidebar nav builder and interactions
   ═══════════════════════════════════════════ */

const AuraNavigation = (function() {
  'use strict';

  function buildSidebar() {
    const navContainer = document.getElementById('sidebarNav');
    if (!navContainer) return;

    const navStructure = AuraRouter.getNavStructure();

    navContainer.innerHTML = navStructure.map(section => `
      <div class="nav-section">
        <div class="nav-section-title">${section.title}</div>
        ${section.items.map(item => {
          const route = AuraRouter.getRoute(item);
          const icon = AuraRouter.getIcon(route.icon);
          return `
            <div class="nav-item" data-route="${item}" onclick="AuraRouter.navigateTo('${item}')">
              <span class="nav-icon">${icon}</span>
              <span class="nav-label">${route.title}</span>
            </div>
          `;
        }).join('')}
      </div>
    `).join('');
  }

  function initMobileMenu() {
    // Add mobile menu toggle to topbar
    const topbarLeft = document.querySelector('.topbar-left');
    if (topbarLeft && !document.querySelector('.mobile-menu-toggle')) {
      const toggle = document.createElement('button');
      toggle.className = 'mobile-menu-toggle';
      toggle.setAttribute('aria-label', 'Menüyü Aç');
      toggle.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
      toggle.addEventListener('click', toggleMobileSidebar);
      topbarLeft.insertBefore(toggle, topbarLeft.firstChild);
    }

    // Add sidebar overlay
    if (!document.querySelector('.sidebar-overlay')) {
      const overlay = document.createElement('div');
      overlay.className = 'sidebar-overlay';
      overlay.addEventListener('click', closeMobileSidebar);
      document.getElementById('app').appendChild(overlay);
    }
  }

  function toggleMobileSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
  }

  function closeMobileSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
  }

  function initSidebarToggle() {
    const toggleBtn = document.getElementById('sidebarToggle');
    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', () => {
      const sidebar = document.getElementById('sidebar');
      sidebar.classList.toggle('collapsed');

      // Save preference
      const isCollapsed = sidebar.classList.contains('collapsed');
      localStorage.setItem('aura-sidebar-collapsed', isCollapsed);
    });

    // Restore preference
    const savedState = localStorage.getItem('aura-sidebar-collapsed');
    if (savedState === 'true') {
      document.getElementById('sidebar').classList.add('collapsed');
    }
  }

  function init() {
    buildSidebar();
    initSidebarToggle();
    initMobileMenu();
  }

  return {
    buildSidebar,
    init,
    toggleMobileSidebar,
    closeMobileSidebar
  };
})();
