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
    hamb.classList.toggle('open');
  });

  // Module toggle buttons
  const moduleToggles = document.querySelectorAll('.module-toggle');
  moduleToggles.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const content = document.getElementById(targetId);
      if (!content) return;
      content.classList.toggle('hidden');
      const hidden = content.classList.contains('hidden');
      btn.setAttribute('aria-expanded', String(!hidden));
      btn.textContent = hidden ? 'Mostrar conteúdo' : 'Esconder conteúdo';
    });
  });

});
