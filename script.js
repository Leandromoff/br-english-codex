document.addEventListener('DOMContentLoaded', () => {
  // Dropdown Grammar
  const dropBtn = document.querySelector('.has-dropdown > .dropdown-toggle');
  dropBtn.addEventListener('click', (e) => {
    const expanded = dropBtn.getAttribute('aria-expanded') === 'true';
    dropBtn.setAttribute('aria-expanded', String(!expanded));
  });

  // Fecha dropdown ao clicar fora
  document.addEventListener('click', (e) => {
    const dropdown = document.querySelector('.dropdown');
    if (
      !dropBtn.contains(e.target) &&
      !dropdown.contains(e.target)
    ) {
      dropBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Menu hamburger
  const hamb = document.getElementById('hamburger');
  const menu = document.getElementById('menu');
  hamb.addEventListener('click', () => {
    menu.classList.toggle('open');
  });

});
