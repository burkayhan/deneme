/* ═══════════════════════════════════════════
   AURA AI OS — Application Core
   Page renderers and app initialization
   ═══════════════════════════════════════════ */

const AuraApp = (function() {
  'use strict';

  // ── Page Renderers ──
  const pageRenderers = {
    dashboard: renderDashboard,
    chat: renderChat,
    'multi-chat': renderGenericPage,
    models: renderModelMarketplace,
    installed: renderGenericPage,
    cloud: renderGenericPage,
    local: renderGenericPage,
    agents: renderAgents,
    memory: renderGenericPage,
    knowledge: renderGenericPage,
    'vector-db': renderGenericPage,
    workflows: renderWorkflows,
    automation: renderGenericPage,
    prompts: renderGenericPage,
    documents: renderGenericPage,
    projects: renderGenericPage,
    files: renderGenericPage,
    'image-gen': renderGenericPage,
    voice: renderGenericPage,
    analytics: renderAnalytics,
    performance: renderGenericPage,
    'gpu-monitor': renderMonitor,
    'cpu-monitor': renderMonitor,
    'ram-monitor': renderMonitor,
    storage: renderGenericPage,
    logs: renderGenericPage,
    console: renderGenericPage,
    notifications: renderGenericPage,
    plugins: renderGenericPage,
    extensions: renderGenericPage,
    settings: renderSettings,
    developer: renderGenericPage,
    admin: renderGenericPage,
    'api-keys': renderGenericPage,
    team: renderGenericPage,
    permissions: renderGenericPage,
    security: renderSecurity,
    'task-queue': renderGenericPage,
    jobs: renderGenericPage,
    scheduler: renderGenericPage,
    'model-router': renderGenericPage,
    health: renderGenericPage,
    cost: renderGenericPage,
    usage: renderGenericPage,
    'live-monitor': renderGenericPage
  };

  // ── Dashboard ──
  function renderDashboard() {
    const container = document.getElementById('pageContent');
    container.innerHTML = `
      <div class="page-header">
        <h1 class="page-title">Dashboard</h1>
        <p class="page-subtitle">Aura AI OS kontrol merkezine hoş geldiniz</p>
      </div>
      
      <div class="dashboard-grid stagger-children">
        ${AuraComponents.createStatCard({
          icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
          iconType: 'primary', value: '1,247', label: 'Toplam Sohbet', change: '12%', changeType: 'up'
        })}
        ${AuraComponents.createStatCard({
          icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/></svg>',
          iconType: 'success', value: '8', label: 'Aktif Ajan', change: '2', changeType: 'up'
        })}
        ${AuraComponents.createStatCard({
          icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
          iconType: 'info', value: '24', label: 'Yüklü Model', change: '3', changeType: 'up'
        })}
        ${AuraComponents.createStatCard({
          icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
          iconType: 'warning', value: '$142.50', label: 'Aylık Maliyet', change: '8%', changeType: 'down'
        })}
      </div>

      <div class="dashboard-section">
        <h2 class="dashboard-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          Hızlı İşlemler
        </h2>
        <div class="quick-actions stagger-children">
          <div class="quick-action-card" onclick="AuraRouter.navigateTo('chat')">
            <div class="quick-action-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
            <div class="quick-action-title">Yeni Sohbet</div>
            <div class="quick-action-desc">AI ile yeni bir konuşma başlat</div>
          </div>
          <div class="quick-action-card" onclick="AuraRouter.navigateTo('agents')">
            <div class="quick-action-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/></svg></div>
            <div class="quick-action-title">Ajan Oluştur</div>
            <div class="quick-action-desc">Özel bir AI ajanı yapılandır</div>
          </div>
          <div class="quick-action-card" onclick="AuraRouter.navigateTo('workflows')">
            <div class="quick-action-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div>
            <div class="quick-action-title">İş Akışı</div>
            <div class="quick-action-desc">Otomasyon iş akışı oluştur</div>
          </div>
          <div class="quick-action-card" onclick="AuraRouter.navigateTo('models')">
            <div class="quick-action-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg></div>
            <div class="quick-action-title">Model Keşfet</div>
            <div class="quick-action-desc">Yeni AI modellerini keşfet</div>
          </div>
        </div>
      </div>

      <div class="dashboard-section">
        <h2 class="dashboard-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          Son Aktiviteler
        </h2>
        <div class="activity-feed">
          <div class="activity-item">
            <div class="activity-icon" style="background: var(--aura-primary-glow); color: var(--aura-primary-light);">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <div class="activity-content">
              <div class="activity-text"><strong>GPT-4o</strong> ile yeni sohbet başlatıldı</div>
              <div class="activity-time">2 dakika önce</div>
            </div>
          </div>
          <div class="activity-item">
            <div class="activity-icon" style="background: rgba(16, 185, 129, 0.1); color: var(--aura-success);">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/></svg>
            </div>
            <div class="activity-content">
              <div class="activity-text"><strong>Kod Ajanı</strong> bir görevi tamamladı</div>
              <div class="activity-time">15 dakika önce</div>
            </div>
          </div>
          <div class="activity-item">
            <div class="activity-icon" style="background: rgba(59, 130, 246, 0.1); color: var(--aura-info);">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
            </div>
            <div class="activity-content">
              <div class="activity-text"><strong>Claude 3.5 Sonnet</strong> modeli güncellendi</div>
              <div class="activity-time">1 saat önce</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // ── Chat ──
  function renderChat() {
    const container = document.getElementById('pageContent');
    container.innerHTML = `
      <div class="chat-layout">
        <div class="chat-sidebar">
          <div class="chat-sidebar-header">
            <span class="chat-sidebar-title">Sohbetler</span>
            <button class="btn btn-icon btn-sm" title="Yeni Sohbet">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </button>
          </div>
          <div class="chat-list">
            <div class="chat-list-item active">
              <div class="chat-list-avatar">G4</div>
              <div class="chat-list-info">
                <div class="chat-list-name">GPT-4o</div>
                <div class="chat-list-preview">Merhaba! Size nasıl yardımcı olabilirim?</div>
              </div>
              <div class="chat-list-meta">
                <span class="chat-list-time">Şimdi</span>
              </div>
            </div>
            <div class="chat-list-item">
              <div class="chat-list-avatar">C3</div>
              <div class="chat-list-info">
                <div class="chat-list-name">Claude 3.5</div>
                <div class="chat-list-preview">Bu konuda size yardımcı olabilirim...</div>
              </div>
              <div class="chat-list-meta">
                <span class="chat-list-time">2s</span>
                <span class="chat-list-unread">2</span>
              </div>
            </div>
            <div class="chat-list-item">
              <div class="chat-list-avatar">DS</div>
              <div class="chat-list-info">
                <div class="chat-list-name">DeepSeek V3</div>
                <div class="chat-list-preview">Kod analizi tamamlandı</div>
              </div>
              <div class="chat-list-meta">
                <span class="chat-list-time">1s</span>
              </div>
            </div>
          </div>
        </div>
        <div class="chat-main">
          <div class="chat-header">
            <div class="chat-header-info">
              <div class="chat-header-avatar">G4</div>
              <div class="chat-header-details">
                <h3>GPT-4o</h3>
                <span><span class="status-dot online"></span> Çevrimiçi</span>
              </div>
            </div>
            <div class="chat-header-actions">
              <button class="btn btn-ghost btn-sm">Temizle</button>
              <button class="btn btn-ghost btn-sm">Ayarlar</button>
            </div>
          </div>
          <div class="chat-messages">
            <div class="message ai">
              <div class="message-avatar">G4</div>
              <div>
                <div class="message-bubble">Merhaba! Ben GPT-4o. Size nasıl yardımcı olabilirim? Kod yazma, analiz, yaratıcı içerik üretme veya başka bir konuda yardıma ihtiyacınız varsa buradayım.</div>
                <div class="message-time">12:30</div>
              </div>
            </div>
            <div class="message user">
              <div class="message-avatar">A</div>
              <div>
                <div class="message-bubble">Aura AI OS hakkında bilgi verir misin?</div>
                <div class="message-time">12:31</div>
              </div>
            </div>
            <div class="message ai">
              <div class="message-avatar">G4</div>
              <div>
                <div class="message-bubble">Aura AI OS, çoklu AI modelleri, ajanlar ve iş akışlarını tek bir merkezi arayüzden yönetebilen modern bir AI İşletim Sistemidir. OpenAI, Anthropic, Google, DeepSeek ve daha birçok sağlayıcıyı destekler.</div>
                <div class="message-time">12:31</div>
              </div>
            </div>
          </div>
          <div class="chat-input-area">
            <div class="chat-input-wrapper">
              <button class="chat-input-btn" title="Dosya Ekle">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
              </button>
              <textarea class="chat-input" placeholder="Bir mesaj yazın..." rows="1"></textarea>
              <div class="chat-input-actions">
                <button class="chat-input-btn" title="Mikrofon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
                </button>
                <button class="chat-input-btn" title="Emoji">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
                </button>
              </div>
            </div>
            <button class="chat-send-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // ── Model Marketplace ──
  function renderModelMarketplace() {
    const container = document.getElementById('pageContent');
    container.innerHTML = `
      <div class="page-header">
        <h1 class="page-title">Model Marketplace</h1>
        <p class="page-subtitle">En iyi AI modellerini keşfedin ve yükleyin</p>
      </div>
      <div class="marketplace-header">
        <div class="marketplace-filters">
          <button class="filter-chip active">Tümü</button>
          <button class="filter-chip">LLM</button>
          <button class="filter-chip">Görüntü</button>
          <button class="filter-chip">Ses</button>
          <button class="filter-chip">Kod</button>
          <button class="filter-chip">Gömülü</button>
        </div>
        <div class="flex gap-2">
          <button class="btn btn-secondary btn-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
            Filtrele
          </button>
        </div>
      </div>
      <div class="card-grid stagger-children">
        ${createModelCard({ name: 'GPT-4o', provider: 'OpenAI', desc: 'En gelişmiş çok modlu model. Metin, görüntü ve ses anlama.', tags: ['LLM', 'Görüntü', 'Ses'], stats: { users: '2.1M', rating: '4.9' }, color: '#10a37f' })}
        ${createModelCard({ name: 'Claude 3.5 Sonnet', provider: 'Anthropic', desc: 'Gelişmiş akıl yürütme ve kodlama yetenekleri.', tags: ['LLM', 'Kod'], stats: { users: '1.8M', rating: '4.8' }, color: '#cc785c' })}
        ${createModelCard({ name: 'Gemini 1.5 Pro', provider: 'Google', desc: '1M token bağlam penceresi ile uzun doküman analizi.', tags: ['LLM', 'Görüntü'], stats: { users: '1.5M', rating: '4.7' }, color: '#4285f4' })}
        ${createModelCard({ name: 'DeepSeek V3', provider: 'DeepSeek', desc: 'Açık kaynak kodlama ve akıl yürütme modeli.', tags: ['LLM', 'Kod', 'Açık Kaynak'], stats: { users: '980K', rating: '4.8' }, color: '#4f46e5' })}
        ${createModelCard({ name: 'Llama 3.1 405B', provider: 'Meta', desc: 'En büyük açık kaynak LLM. Çok dilli destek.', tags: ['LLM', 'Açık Kaynak'], stats: { users: '1.2M', rating: '4.6' }, color: '#0668e1' })}
        ${createModelCard({ name: 'Mistral Large', provider: 'Mistral AI', desc: 'Avrupa merkezli güçlü çok dilli model.', tags: ['LLM', 'Çok Dilli'], stats: { users: '750K', rating: '4.5' }, color: '#ff7000' })}
      </div>
    `;
  }

  function createModelCard({ name, provider, desc, tags, stats, color }) {
    return `
      <div class="model-card">
        <div class="model-card-badge"><span class="badge badge-success">Aktif</span></div>
        <div class="model-card-header">
          <div class="model-card-icon" style="background: ${color}20; color: ${color};">${name.charAt(0)}</div>
          <div class="model-card-info">
            <h3>${name}</h3>
            <span>${provider}</span>
          </div>
        </div>
        <p class="model-card-desc">${desc}</p>
        <div class="model-card-tags">
          ${tags.map(t => `<span class="badge badge-neutral">${t}</span>`).join('')}
        </div>
        <div class="model-card-footer">
          <div class="model-card-stats">
            <span class="model-stat">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg>
              ${stats.users}
            </span>
            <span class="model-stat">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              ${stats.rating}
            </span>
          </div>
          <button class="btn btn-primary btn-sm">Yükle</button>
        </div>
      </div>
    `;
  }

  // ── Agents ──
  function renderAgents() {
    const container = document.getElementById('pageContent');
    container.innerHTML = `
      <div class="page-header">
        <h1 class="page-title">AI Ajanları</h1>
        <p class="page-subtitle">Özel görevler için yapılandırılmış AI ajanları</p>
      </div>
      <div class="card-grid stagger-children">
        ${createAgentCard({ name: 'Araştırma Ajanı', role: 'Bilgi Toplama', status: 'online', emoji: '🔬', desc: 'Web üzerinde derinlemesine araştırma yapar, kaynakları analiz eder ve özet raporlar hazırlar.', capabilities: ['Web Arama', 'PDF Analizi', 'Özet Çıkarma', 'Kaynak Tarama'] })}
        ${createAgentCard({ name: 'Kod Ajanı', role: 'Yazılım Geliştirme', status: 'online', emoji: '💻', desc: 'Kod yazma, hata ayıklama, refactor ve kod incelemesi yapar. Çoklu dil desteği.', capabilities: ['Kod Yazma', 'Hata Ayıklama', 'Refactor', 'Kod İnceleme'] })}
        ${createAgentCard({ name: 'Planlama Ajanı', role: 'Proje Yönetimi', status: 'busy', emoji: '📋', desc: 'Projeleri analiz eder, görev listesi oluşturur ve zaman çizelgesi hazırlar.', capabilities: ['Görev Analizi', 'Zaman Çizelgesi', 'Önceliklendirme', 'Raporlama'] })}
        ${createAgentCard({ name: 'Güvenlik Ajanı', role: 'Siber Güvenlik', status: 'online', emoji: '🛡️', desc: 'Kod güvenlik analizi, zafiyet taraması ve güvenlik önerileri sunar.', capabilities: ['Zafiyet Tarama', 'Kod Analizi', 'Öneri Sunma', 'Raporlama'] })}
        ${createAgentCard({ name: 'UI Tasarımcı', role: 'Arayüz Tasarımı', status: 'offline', emoji: '🎨', desc: 'Kullanıcı arayüzü tasarımı, prototip oluşturma ve tasarım sistemleri kurar.', capabilities: ['UI Tasarım', 'Prototip', 'Tasarım Sistemi', 'Responsive'] })}
        ${createAgentCard({ name: 'DevOps Ajanı', role: 'Altyapı Yönetimi', status: 'online', emoji: '⚙️', desc: 'CI/CD pipeline, container yönetimi ve altyapı otomasyonu sağlar.', capabilities: ['CI/CD', 'Docker', 'Kubernetes', 'Monitoring'] })}
      </div>
    `;
  }

  function createAgentCard({ name, role, status, emoji, desc, capabilities }) {
    const statusColors = { online: 'var(--aura-success)', busy: 'var(--aura-warning)', offline: 'var(--color-text-muted)' };
    return `
      <div class="agent-card">
        <div class="agent-card-header">
          <div class="agent-avatar" style="background: var(--aura-primary-glow);">${emoji}</div>
          <div class="agent-info">
            <div class="agent-name">${name}</div>
            <div class="agent-role">${role}</div>
            <div class="agent-status ${status}">
              <span class="status-dot ${status}"></span>
              ${status === 'online' ? 'Çevrimiçi' : status === 'busy' ? 'Meşgul' : 'Çevrimdışı'}
            </div>
          </div>
        </div>
        <p class="agent-card-desc">${desc}</p>
        <div class="agent-capabilities">
          ${capabilities.map(c => `<span class="agent-capability">${c}</span>`).join('')}
        </div>
        <div class="agent-card-actions">
          <button class="btn btn-primary btn-sm">Başlat</button>
          <button class="btn btn-ghost btn-sm">Yapılandır</button>
        </div>
      </div>
    `;
  }

  // ── Settings ──
  function renderSettings() {
    const container = document.getElementById('pageContent');
    container.innerHTML = `
      <div class="page-header">
        <h1 class="page-title">Ayarlar</h1>
        <p class="page-subtitle">Sistem ve kullanıcı tercihlerini yapılandırın</p>
      </div>
      <div class="settings-layout">
        <div class="settings-nav">
          <div class="settings-nav-item active">Genel</div>
          <div class="settings-nav-item">Modeller</div>
          <div class="settings-nav-item">Ajanlar</div>
          <div class="settings-nav-item">Bildirimler</div>
          <div class="settings-nav-item">Güvenlik</div>
          <div class="settings-nav-item">Gelişmiş</div>
        </div>
        <div class="settings-content">
          <div class="settings-section">
            <h3 class="settings-section-title">Genel Ayarlar</h3>
            <p class="settings-section-desc">Temel uygulama tercihlerini buradan yönetin.</p>
            <div class="form-group">
              <label class="form-label">Dil</label>
              <select class="form-select">
                <option>Türkçe</option>
                <option>English</option>
                <option>Deutsch</option>
                <option>Français</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Varsayılan Model</label>
              <select class="form-select">
                <option>GPT-4o</option>
                <option>Claude 3.5 Sonnet</option>
                <option>Gemini 1.5 Pro</option>
                <option>DeepSeek V3</option>
              </select>
            </div>
            <div class="form-group">
              <label class="toggle">
                <input type="checkbox" class="toggle-input" checked>
                <span class="toggle-slider"></span>
                <span class="toggle-label">Otomatik Güncellemeler</span>
              </label>
            </div>
          </div>
          <div class="settings-section">
            <h3 class="settings-section-title">Görünüm</h3>
            <p class="settings-section-desc">Arayüz görünümünü özelleştirin.</p>
            <div class="form-group">
              <label class="toggle">
                <input type="checkbox" class="toggle-input" checked>
                <span class="toggle-slider"></span>
                <span class="toggle-label">Animasyonları Etkinleştir</span>
              </label>
            </div>
            <div class="form-group">
              <label class="toggle">
                <input type="checkbox" class="toggle-input">
                <span class="toggle-slider"></span>
                <span class="toggle-label">Kompakt Mod</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // ── Analytics ──
  function renderAnalytics() {
    const container = document.getElementById('pageContent');
    container.innerHTML = `
      <div class="page-header">
        <h1 class="page-title">Analytics</h1>
        <p class="page-subtitle">Sistem kullanım istatistikleri ve performans metrikleri</p>
      </div>
      <div class="analytics-grid stagger-children">
        <div class="stat-card"><div class="stat-icon primary"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div><div class="stat-value">45.2K</div><div class="stat-label">Toplam İstek</div></div>
        <div class="stat-card"><div class="stat-icon success"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div><div class="stat-value">98.7%</div><div class="stat-label">Başarı Oranı</div></div>
        <div class="stat-card"><div class="stat-icon info"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><div class="stat-value">1.2s</div><div class="stat-label">Ort. Yanıt Süresi</div></div>
        <div class="stat-card"><div class="stat-icon warning"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div><div class="stat-value">$892</div><div class="stat-label">Aylık Maliyet</div></div>
      </div>
      <div class="card-grid" style="margin-top: var(--space-6);">
        <div class="chart-card">
          <div class="chart-card-header"><h3 class="card-title">İstek Hacmi</h3><span class="text-muted text-sm">Son 30 gün</span></div>
          <div class="chart-placeholder">📊 Grafik bileşeni buraya entegre edilecek</div>
        </div>
        <div class="chart-card">
          <div class="chart-card-header"><h3 class="card-title">Model Kullanımı</h3><span class="text-muted text-sm">Dağılım</span></div>
          <div class="chart-placeholder">🥧 Pasta grafik bileşeni buraya entegre edilecek</div>
        </div>
      </div>
    `;
  }

  // ── Monitor (GPU/CPU/RAM) ──
  function renderMonitor() {
    const route = AuraRouter.getCurrentRoute();
    const titles = { 'gpu-monitor': 'GPU Monitor', 'cpu-monitor': 'CPU Monitor', 'ram-monitor': 'RAM Monitor' };
    const container = document.getElementById('pageContent');
    container.innerHTML = `
      <div class="page-header">
        <h1 class="page-title">${titles[route] || 'Sistem Monitörü'}</h1>
        <p class="page-subtitle">Gerçek zamanlı sistem kaynak kullanımı</p>
      </div>
      <div class="monitor-grid stagger-children">
        <div class="monitor-card">
          <div class="monitor-header"><span class="text-sm font-medium">Kullanım</span><span class="badge badge-success">Normal</span></div>
          <div class="monitor-value">42%</div>
          <div class="monitor-label">Mevcut yük</div>
          <div class="monitor-bar"><div class="monitor-bar-label"><span>Düşük</span><span>Yüksek</span></div><div class="progress-bar"><div class="progress-fill" style="width: 42%"></div></div></div>
        </div>
        <div class="monitor-card">
          <div class="monitor-header"><span class="text-sm font-medium">Sıcaklık</span><span class="badge badge-warning">Sıcak</span></div>
          <div class="monitor-value">68°C</div>
          <div class="monitor-label">Çalışma sıcaklığı</div>
          <div class="monitor-bar"><div class="monitor-bar-label"><span>Soğuk</span><span>Sıcak</span></div><div class="progress-bar"><div class="progress-fill" style="width: 68%"></div></div></div>
        </div>
        <div class="monitor-card">
          <div class="monitor-header"><span class="text-sm font-medium">Bellek</span><span class="badge badge-success">Optimal</span></div>
          <div class="monitor-value">12.4 GB</div>
          <div class="monitor-label">/ 24 GB kullanımda</div>
          <div class="monitor-bar"><div class="monitor-bar-label"><span>0 GB</span><span>24 GB</span></div><div class="progress-bar"><div class="progress-fill" style="width: 52%"></div></div></div>
        </div>
        <div class="monitor-card">
          <div class="monitor-header"><span class="text-sm font-medium">Güç</span><span class="badge badge-success">Verimli</span></div>
          <div class="monitor-value">185W</div>
          <div class="monitor-label">Güç tüketimi</div>
          <div class="monitor-bar"><div class="monitor-bar-label"><span>Düşük</span><span>Yüksek</span></div><div class="progress-bar"><div class="progress-fill" style="width: 37%"></div></div></div>
        </div>
      </div>
    `;
  }

  // ── Workflows ──
  function renderWorkflows() {
    const container = document.getElementById('pageContent');
    container.innerHTML = `
      <div class="page-header">
        <h1 class="page-title">İş Akışları</h1>
        <p class="page-subtitle">Görsel iş akışı editörü ile otomasyon oluşturun</p>
      </div>
      <div class="workflow-canvas">
        <div class="empty-state">
          <div class="empty-state-icon" style="width: 80px; height: 80px;">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          </div>
          <div class="empty-state-title">İş Akışı Oluştur</div>
          <div class="empty-state-desc">Sürükle-bırak arayüzü ile kendi otomasyon iş akışınızı tasarlayın.</div>
          <button class="btn btn-primary mt-4" onclick="AuraComponents.showToast({type: 'info', title: 'Bilgi', message: 'İş akışı editörü yakında kullanıma sunulacak'})">Yeni İş Akışı</button>
        </div>
      </div>
    `;
  }

  // ── Security ──
  function renderSecurity() {
    const container = document.getElementById('pageContent');
    container.innerHTML = `
      <div class="page-header">
        <h1 class="page-title">Güvenlik Merkezi</h1>
        <p class="page-subtitle">Sistem güvenliği ve uyumluluk durumu</p>
      </div>
      <div class="security-score">
        <div class="score-ring"><div class="score-value">94</div></div>
        <div class="score-details">
          <h3>Güvenlik Puanı: Mükemmel</h3>
          <p>Sisteminiz güçlü güvenlik önlemleri ile korunuyor. Son tarama: 2 saat önce</p>
        </div>
      </div>
      <div class="card-grid stagger-children">
        <div class="card"><div class="card-header"><h3 class="card-title">🔐 Kimlik Doğrulama</h3><span class="badge badge-success">Güvenli</span></div><div class="card-body"><p class="text-sm text-secondary">JWT ve OAuth 2.0 ile çift faktörlü kimlik doğrulama aktif.</p></div></div>
        <div class="card"><div class="card-header"><h3 class="card-title">🛡️ API Güvenliği</h3><span class="badge badge-success">Güvenli</span></div><div class="card-body"><p class="text-sm text-secondary">Rate limiting, IP whitelist ve API key rotasyonu aktif.</p></div></div>
        <div class="card"><div class="card-header"><h3 class="card-title">📋 Denetim Günlükleri</h3><span class="badge badge-warning">İncele</span></div><div class="card-body"><p class="text-sm text-secondary">Son 24 saatte 3 şüpheli girişim tespit edildi.</p></div></div>
        <div class="card"><div class="card-header"><h3 class="card-title">🔒 Veri Şifreleme</h3><span class="badge badge-success">Güvenli</span></div><div class="card-body"><p class="text-sm text-secondary">AES-256 şifreleme ile dinlenme halinde ve aktarımda koruma.</p></div></div>
      </div>
    `;
  }

  // ── Generic Page (placeholder for unimplemented pages) ──
  function renderGenericPage() {
    const container = document.getElementById('pageContent');
    const route = AuraRouter.getCurrentRoute();
    const routeData = AuraRouter.getRoute(route);
    
    AuraComponents.renderEmptyState(container, {
      icon: `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="9" x2="15" y2="15"/><line x1="15" y1="9" x2="9" y2="15"/></svg>`,
      title: routeData.title,
      description: `${routeData.title} sayfası yapım aşamasındadır. Bu bölüm yakında kullanıma sunulacaktır.`,
      actionText: 'Dashboard\'a Dön',
      actionCallback: () => AuraRouter.navigateTo('dashboard')
    });
  }

  // ── Initialize ──
  function init() {
    // Register all page renderers
    Object.keys(pageRenderers).forEach(route => {
      AuraRouter.registerRouteHandler(route, pageRenderers[route]);
    });

    // Initial render
    const initialRoute = AuraRouter.getCurrentRoute();
    if (pageRenderers[initialRoute]) {
      pageRenderers[initialRoute]();
    }

    // Listen for route changes
    window.addEventListener('auraroutechange', (e) => {
      const route = e.detail.route;
      if (pageRenderers[route]) {
        // Small delay for transition feel
        setTimeout(() => pageRenderers[route](), 50);
      }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      // Ctrl/Cmd + K for search
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('globalSearch')?.focus();
      }
    });

    // Global search
    const searchInput = document.getElementById('globalSearch');
    if (searchInput) {
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          AuraComponents.showToast({ type: 'info', title: 'Arama', message: `"${searchInput.value}" için arama yapılıyor...` });
        }
      });
    }
  }

  return { init };
})();

// ── Bootstrap Application ──
document.addEventListener('DOMContentLoaded', () => {
  AuraTheme.init();
  AuraRouter.init();
  AuraNavigation.init();
  AuraApp.init();
});