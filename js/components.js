/* ═══════════════════════════════════════════
   AURA AI OS — Components
   Reusable UI component builders
   ═══════════════════════════════════════════ */

const AuraComponents = (function() {
  'use strict';

  // ── Toast Notification ──
  function showToast(options) {
    const { type = 'info', title, message, duration = 4000 } = options;
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    const icons = {
      success: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>',
      error: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
      warning: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
      info: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>'
    };

    toast.innerHTML = `
      <span class="toast-icon">${icons[type]}</span>
      <div class="toast-content">
        ${title ? `<div class="toast-title">${title}</div>` : ''}
        ${message ? `<div class="toast-message">${message}</div>` : ''}
      </div>
      <button class="toast-close" onclick="this.parentElement.remove()">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    `;

    container.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => toast.classList.add('show'));

    // Auto remove
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  // ── Modal Dialog ──
  function showModal(options) {
    const { title, content, onConfirm, onCancel, showCancel = true, confirmText = 'Onayla', cancelText = 'İptal' } = options;
    const container = document.getElementById('modalContainer');
    if (!container) return;

    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';

    backdrop.innerHTML = `
      <div class="modal">
        <div class="modal-header">
          <h3 class="modal-title">${title}</h3>
          <button class="modal-close" onclick="AuraComponents.closeModal(this)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div class="modal-body">${content}</div>
        <div class="modal-footer">
          ${showCancel ? `<button class="btn btn-ghost" onclick="AuraComponents.closeModal(this)">${cancelText}</button>` : ''}
          <button class="btn btn-primary" id="modalConfirm">${confirmText}</button>
        </div>
      </div>
    `;

    container.appendChild(backdrop);

    // Trigger animation
    requestAnimationFrame(() => backdrop.classList.add('active'));

    // Confirm handler
    const confirmBtn = backdrop.querySelector('#modalConfirm');
    if (confirmBtn && onConfirm) {
      confirmBtn.addEventListener('click', () => {
        onConfirm();
        closeModal(confirmBtn);
      });
    }
  }

  function closeModal(element) {
    const backdrop = element.closest('.modal-backdrop');
    if (backdrop) {
      backdrop.classList.remove('active');
      setTimeout(() => backdrop.remove(), 300);
    }
  }

  // ── Empty State ──
  function renderEmptyState(container, options) {
    const { icon, title, description, actionText, actionCallback } = options;
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">${icon || ''}</div>
        <div class="empty-state-title">${title}</div>
        <div class="empty-state-desc">${description}</div>
        ${actionText ? `<button class="btn btn-primary mt-4" id="emptyAction">${actionText}</button>` : ''}
      </div>
    `;
    
    if (actionCallback) {
      const btn = container.querySelector('#emptyAction');
      if (btn) btn.addEventListener('click', actionCallback);
    }
  }

  // ── Stat Card ──
  function createStatCard(options) {
    const { icon, iconType = 'primary', value, label, change, changeType = 'up' } = options;
    return `
      <div class="stat-card">
        <div class="stat-icon ${iconType}">${icon}</div>
        <div class="stat-value">${value}</div>
        <div class="stat-label">${label}</div>
        ${change ? `<div class="stat-change ${changeType}">${changeType === 'up' ? '↑' : '↓'} ${change}</div>` : ''}
      </div>
    `;
  }

  return {
    showToast,
    showModal,
    closeModal,
    renderEmptyState,
    createStatCard
  };
})();