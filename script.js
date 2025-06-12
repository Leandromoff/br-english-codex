document.addEventListener('DOMContentLoaded', () => {
  // Dropdown Grammar
  const dropBtns = document.querySelectorAll('.has-dropdown > .dropdown-toggle');
  dropBtns.forEach((dropBtn) => {
    dropBtn.addEventListener('click', () => {
      const expanded = dropBtn.getAttribute('aria-expanded') === 'true';
      dropBtn.setAttribute('aria-expanded', String(!expanded));
    });
  });

  // Fecha dropdown ao clicar fora
  document.addEventListener('click', (e) => {
    dropBtns.forEach((btn) => {
      const dropdown = btn.nextElementSibling;
      if (dropdown && !btn.contains(e.target) && !dropdown.contains(e.target)) {
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Menu hamburger
  const hamb = document.getElementById('hamburger');
  const menu = document.getElementById('menu');
  hamb.addEventListener('click', () => {
    const expanded = hamb.getAttribute('aria-expanded') === 'true';
    hamb.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('open');
  });

});
