// Toast utility functions for easy programmatic use

export interface ToastOptions {
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  position?:
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left'
    | 'top-center'
    | 'bottom-center';
  showIcon?: boolean;
  showProgress?: boolean;
  dismissible?: boolean;
}

export function showToast(options: ToastOptions) {
  const {
    message,
    type = 'info',
    duration = 5000,
    position = 'top-right',
    showIcon = true,
    showProgress = true,
    dismissible = true,
  } = options;

  // Create toast element
  const toastId = `toast-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
  const toast = document.createElement('div');
  toast.id = toastId;
  toast.className = 'toast';
  toast.setAttribute('data-type', type);
  toast.setAttribute('data-position', position);
  toast.setAttribute('data-duration', duration.toString());

  // Get colors
  const colors = {
    success: {
      bg: 'rgba(34, 197, 94, 0.15)',
      border: 'rgba(34, 197, 94, 0.3)',
      text: '#22c55e',
      icon: '#22c55e',
    },
    error: {
      bg: 'rgba(239, 68, 68, 0.15)',
      border: 'rgba(239, 68, 68, 0.3)',
      text: '#ef4444',
      icon: '#ef4444',
    },
    warning: {
      bg: 'rgba(234, 179, 8, 0.15)',
      border: 'rgba(234, 179, 8, 0.3)',
      text: '#eab308',
      icon: '#eab308',
    },
    info: {
      bg: 'rgba(59, 130, 246, 0.15)',
      border: 'rgba(59, 130, 246, 0.3)',
      text: '#3b82f6',
      icon: '#3b82f6',
    },
  };

  const colorScheme = colors[type];
  toast.style.setProperty('--toast-bg', colorScheme.bg);
  toast.style.setProperty('--toast-border', colorScheme.border);
  toast.style.setProperty('--toast-text', colorScheme.text);
  toast.style.setProperty('--toast-icon', colorScheme.icon);

  // Icons
  const icons = {
    success: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M20 6L9 17l-5-5"/>
    </svg>`,
    error: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 8v4M12 16h.01"/>
    </svg>`,
    warning: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
      <line x1="12" y1="9" x2="12" y2="13"/>
      <line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>`,
    info: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="16" x2="12" y2="12"/>
      <line x1="12" y1="8" x2="12.01" y2="8"/>
    </svg>`,
  };

  // Build toast HTML
  let toastHTML = '<div class="toast-content">';

  if (showIcon) {
    toastHTML += `<div class="toast-icon">${icons[type]}</div>`;
  }

  toastHTML += `<div class="toast-message">${message}</div>`;

  if (dismissible) {
    toastHTML += `<button class="toast-close" aria-label="Close">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 6L6 18M6 6l12 12"/>
      </svg>
    </button>`;
  }

  toastHTML += '</div>';

  if (showProgress) {
    toastHTML += '<div class="toast-progress"><div class="toast-progress-bar"></div></div>';
  }

  toast.innerHTML = toastHTML;

  // Add styles
  const style = document.createElement('style');
  style.textContent = `
    .toast-container {
      position: fixed;
      z-index: 10000;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      pointer-events: none;
      padding: 1rem;
    }
    .toast-container[data-position="top-right"] { top: 0; right: 0; align-items: flex-end; }
    .toast-container[data-position="top-left"] { top: 0; left: 0; align-items: flex-start; }
    .toast-container[data-position="bottom-right"] { bottom: 0; right: 0; align-items: flex-end; }
    .toast-container[data-position="bottom-left"] { bottom: 0; left: 0; align-items: flex-start; }
    .toast-container[data-position="top-center"] { top: 0; left: 50%; transform: translateX(-50%); align-items: center; }
    .toast-container[data-position="bottom-center"] { bottom: 0; left: 50%; transform: translateX(-50%); align-items: center; }
    .toast {
      min-width: 300px;
      max-width: 400px;
      background: var(--toast-bg);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid var(--toast-border);
      border-radius: 16px;
      padding: 1rem 1.25rem;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
      pointer-events: auto;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      opacity: 0;
      transform: translateY(-20px) scale(0.9);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .toast.show {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    .toast.dismissing {
      opacity: 0;
      transform: translateY(-20px) scale(0.9);
    }
    .toast-content {
      display: flex;
      align-items: center;
      gap: 1rem;
      position: relative;
      z-index: 2;
    }
    .toast-icon {
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--toast-icon);
      flex-shrink: 0;
      animation: iconPulse 0.5s ease-out;
    }
    @keyframes iconPulse {
      0% { transform: scale(0); }
      50% { transform: scale(1.2); }
      100% { transform: scale(1); }
    }
    .toast-message {
      flex: 1;
      color: white;
      font-size: 0.95rem;
      line-height: 1.5;
      font-weight: 500;
    }
    .toast-close {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      border: none;
      color: rgba(255, 255, 255, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s ease;
      flex-shrink: 0;
    }
    .toast-close:hover {
      background: rgba(255, 255, 255, 0.2);
      color: white;
      transform: rotate(90deg);
    }
    .toast-progress {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: rgba(255, 255, 255, 0.1);
      overflow: hidden;
    }
    .toast-progress-bar {
      height: 100%;
      width: 100%;
      background: var(--toast-icon);
      transform-origin: left;
      box-shadow: 0 0 10px var(--toast-icon);
      transition: width ${duration}ms linear;
    }
    .toast:hover {
      transform: translateY(-2px) scale(1.02);
      box-shadow: 0 15px 50px rgba(0, 0, 0, 0.4);
    }
    .toast:hover .toast-progress-bar {
      animation-play-state: paused;
    }
  `;

  if (!document.querySelector('style[data-toast-styles]')) {
    style.setAttribute('data-toast-styles', 'true');
    document.head.appendChild(style);
  }

  // Get or create container
  let container = document.querySelector(`.toast-container[data-position="${position}"]`);
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    container.setAttribute('data-position', position);
    document.body.appendChild(container);
  }

  container.appendChild(toast);

  // Trigger entrance animation
  setTimeout(() => {
    toast.classList.add('show');
    if (showProgress && duration > 0) {
      const progressBar = toast.querySelector('.toast-progress-bar') as HTMLElement;
      if (progressBar) {
        setTimeout(() => {
          progressBar.style.width = '0%';
        }, 300);
      }
    }
  }, 10);

  // Auto dismiss
  if (duration > 0) {
    setTimeout(() => {
      dismissToast(toast);
    }, duration);
  }

  // Close button
  const closeButton = toast.querySelector('.toast-close');
  if (closeButton) {
    closeButton.addEventListener('click', () => dismissToast(toast));
  }

  // Click to dismiss
  toast.addEventListener('click', e => {
    if (e.target === toast || e.target === toast.querySelector('.toast-content')) {
      dismissToast(toast);
    }
  });

  function dismissToast(toastElement: HTMLElement) {
    toastElement.classList.add('dismissing');
    setTimeout(() => {
      toastElement.remove();
    }, 300);
  }

  return toast;
}

// Convenience functions
export function toastSuccess(message: string, options?: Partial<ToastOptions>) {
  return showToast({ ...options, message, type: 'success' });
}

export function toastError(message: string, options?: Partial<ToastOptions>) {
  return showToast({ ...options, message, type: 'error' });
}

export function toastWarning(message: string, options?: Partial<ToastOptions>) {
  return showToast({ ...options, message, type: 'warning' });
}

export function toastInfo(message: string, options?: Partial<ToastOptions>) {
  return showToast({ ...options, message, type: 'info' });
}
