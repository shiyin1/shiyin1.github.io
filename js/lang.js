(function () {
  const supportedLanguages = ["en", "zh"];
  const defaultLanguage = "en";
  const storageKey = "shi-yin-language";

  function applyLanguage(language) {
    const selectedLanguage = supportedLanguages.includes(language) ? language : defaultLanguage;

    document.documentElement.lang = selectedLanguage === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-en][data-zh]").forEach((element) => {
      element.innerHTML = element.dataset[selectedLanguage];
    });
    document.querySelectorAll("[data-lang]").forEach((button) => {
      button.classList.toggle("is-selected", button.dataset.lang === selectedLanguage);
      button.setAttribute("aria-pressed", button.dataset.lang === selectedLanguage);
    });

    localStorage.setItem(storageKey, selectedLanguage);
  }

  const savedLanguage = localStorage.getItem(storageKey) || defaultLanguage;
  applyLanguage(savedLanguage);

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.lang));
  });
})();
