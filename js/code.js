document.querySelectorAll('h1').forEach(h1 => {
  h1.addEventListener('click', () => {
    let next = h1.nextElementSibling;
    while (next && !next.classList.contains('ability-box')) {
      next = next.nextElementSibling;
    }
    if (next) {
      next.classList.toggle('hidden');
    }
  });
});