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

  // ==== Lesson Tabs ====
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  if (tabButtons.length && tabContents.length) {
    tabButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        tabButtons.forEach((b) => b.classList.remove('active'));
        tabContents.forEach((c) => c.classList.remove('active'));
        btn.classList.add('active');
        const target = document.getElementById(btn.dataset.tab);
        if (target) target.classList.add('active');
      });
    });
  }

  // ==== Text-to-Speech Buttons ====
  const exampleParas = document.querySelectorAll(
    '#exercises .example-container p'
  );
  if (exampleParas.length && 'speechSynthesis' in window) {
    exampleParas.forEach((p) => {
      const text = p.textContent.trim();
      const cleanedText = text.replace(/^\d+\.\s*/, '');
      const btn = document.createElement('button');
      btn.textContent = '🔊';
      btn.className = 'tts-btn';
      btn.type = 'button';
      btn.addEventListener('click', () => {
        const utter = new SpeechSynthesisUtterance(cleanedText);
        utter.lang = 'en-US';
        utter.rate = 0.8;
        const voice = speechSynthesis
          .getVoices()
          .find((v) => v.lang === 'en-US' || v.name === 'Google US English');
        if (voice) utter.voice = voice;
        speechSynthesis.speak(utter);
      });
      p.appendChild(btn);
    });
  }

});
