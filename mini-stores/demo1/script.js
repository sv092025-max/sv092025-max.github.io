document.querySelectorAll('.product-card').forEach(card => {
  card.style.transition = 'transform 0.15s ease, box-shadow 0.15s ease';
  card.addEventListener('mousemove', e => {
    const { width, height, left, top } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rotateY = ((x / width) * 16) - 8;  // Rango -8 a 8 grados
    const rotateX = ((y / height) * -12) + 6; // Rango -6 a 6 grados
    card.style.transform = `perspective(700px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.04)`;
    card.style.boxShadow = `${-rotateY * 1.5}px ${rotateX * 1.5}px 14px rgba(13, 110, 253, 0.3)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'none';
    card.style.boxShadow = '0 7px 28px rgba(0, 0, 0, 0.08)';
  });
});
