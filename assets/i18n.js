(() => {
  'use strict';

  const translations = window.epusulaTranslations;
  const storageKey = 'epusula-language';
  const message = document.getElementById('whatsapp-message');
  const messageKey = message.dataset.i18n;
  const contactLinks = document.querySelectorAll('.contact-yellow, .english-contact-link');
  const originalContactHref = document.querySelector('.contact-yellow').href;
  const buttons = document.querySelectorAll('[data-language]');
  let currentLanguage = 'tr';

  function setLanguage(language) {
    if (language !== 'tr' && language !== 'en') return;

    document.querySelectorAll('[data-i18n]').forEach(element => {
      const entry = translations[element.dataset.i18n];
      if (!entry) return;
      const text = entry[language];
      const attribute = element.dataset.i18nAttr;
      if (attribute) {
        element.setAttribute(attribute, text);
      } else if (element === message) {
        // Translate only the untouched template; preserve the visitor's draft.
        if (message.value === entry[currentLanguage]) message.value = text;
        message.defaultValue = text;
      } else {
        element.textContent = text;
      }
    });
    document.querySelectorAll('[data-i18n-title]').forEach(element => {
      element.title = translations[element.dataset.i18nTitle][language];
    });

    document.documentElement.lang = language;
    buttons.forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.language === language));
    });
    document.querySelector('.form-language-note').hidden = language !== 'en';
    contactLinks.forEach(link => {
      link.href = language === 'en'
        ? 'https://wa.me/905521309058?text=' + encodeURIComponent(translations[messageKey].en)
        : originalContactHref;
    });
    currentLanguage = language;
    try {
      localStorage.setItem(storageKey, language);
    } catch {
      // Language switching still works when browser storage is unavailable.
    }
    document.dispatchEvent(new CustomEvent('languagechange', { detail: { language } }));
    // Text reflow can change carousel widths and arrow availability.
    window.dispatchEvent(new Event('resize'));
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => setLanguage(button.dataset.language));
  });

  let savedLanguage = 'tr';
  try {
    savedLanguage = localStorage.getItem(storageKey) || 'tr';
  } catch {
    // Turkish remains the default on a first visit or without storage access.
  }
  setLanguage(savedLanguage === 'en' ? 'en' : 'tr');
})();
