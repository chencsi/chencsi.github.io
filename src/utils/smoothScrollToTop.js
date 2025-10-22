export function smoothScrollToTop({ timeout = 5000, tolerance = 1 } = {}) {
  return new Promise((resolve, reject) => {
    if (window.scrollY <= tolerance) {
      resolve();
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    const onScrollEnd = (e) => {
      cleanup();
      resolve();
    };
    if ('onscrollend' in window) {
      window.addEventListener('scrollend', onScrollEnd, { once: true });
    }

    let rafId = null;
    const checkRaf = () => {
      if (window.scrollY <= tolerance) {
        cleanup();
        resolve();
        return;
      }
      rafId = requestAnimationFrame(checkRaf);
    };
    rafId = requestAnimationFrame(checkRaf);

    const to = setTimeout(() => {
      cleanup();
      resolve();
    }, timeout);

    function cleanup() {
      if ('onscrollend' in window) {
        window.removeEventListener('scrollend', onScrollEnd);
      }
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      clearTimeout(to);
    }
  });
}