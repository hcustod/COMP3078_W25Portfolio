const initSpaceBackground = () => {
  const root = document.getElementById('space-background');
  if (!root || root.dataset.initialized === 'true') return;
  root.dataset.initialized = 'true';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  let cleanupScene: (() => void) | undefined;
  let timeoutId = 0;
  let idleId = 0;
  let isDisposed = false;

  const cleanup = () => {
    isDisposed = true;
    if (timeoutId) {
      window.clearTimeout(timeoutId);
      timeoutId = 0;
    }

    const cancelIdleCallback = (window as Window & {
      cancelIdleCallback?: (id: number) => void;
    }).cancelIdleCallback;

    if (idleId && typeof cancelIdleCallback === 'function') {
      cancelIdleCallback(idleId);
      idleId = 0;
    }

    cleanupScene?.();
    cleanupScene = undefined;
    window.removeEventListener('pagehide', cleanup);
  };

  const start = async () => {
    if (isDisposed) return;

    try {
      const { default: mountSpaceBackground } = await import('./spaceBackgroundScene');
      if (isDisposed) return;
      cleanupScene = mountSpaceBackground(root);
    } catch (error) {
      root.dataset.initialized = 'false';
      console.error('Failed to initialize the space background.', error);
    }
  };

  const idleCallback = (window as Window & {
    requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
  }).requestIdleCallback;

  if (typeof idleCallback === 'function') {
    idleId = idleCallback(() => {
      void start();
    }, { timeout: 1200 });
  } else {
    timeoutId = window.setTimeout(() => {
      void start();
    }, 500);
  }

  window.addEventListener('pagehide', cleanup, { once: true });
};

export default initSpaceBackground;
