// Home page effects. Native anchor navigation is intentionally preserved.
(() => {
  const glow = document.querySelector('.cursor-glow');
  if (glow && window.matchMedia('(pointer:fine)').matches) {
    let x = 0, y = 0, gx = 0, gy = 0;
    window.addEventListener('mousemove', e => { x = e.clientX; y = e.clientY; glow.classList.add('visible'); });
    document.addEventListener('mouseleave', () => glow.classList.remove('visible'));
    const animate = () => {
      gx += (x - gx) * .18; gy += (y - gy) * .18;
      glow.style.transform = `translate(${gx}px, ${gy}px) translate(-50%, -50%)`;
      requestAnimationFrame(animate);
    };
    animate();
  }
  document.querySelectorAll('.card.press, .card').forEach(card => {
    card.addEventListener('click', e => {
      const rect = card.getBoundingClientRect();
      const size = Math.hypot(rect.width, rect.height) * 1.8;
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
      card.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
    });
  });
})();
