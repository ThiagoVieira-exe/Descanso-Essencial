window.addEventListener('scroll', () => {
  const links = document.querySelectorAll('nav a');
  const fromTop = window.scrollY + 100;

  links.forEach(link => {
    const section = document.querySelector(link.hash);
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  const btn = document.getElementById('btnTop');
  if (window.scrollY > 400) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}