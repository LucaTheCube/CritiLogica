document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop - 20, // cambia 80 con l’altezza del tuo header
      behavior: 'smooth'
    });
  });
});