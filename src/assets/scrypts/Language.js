class Language {
  constructor() {
    this.rusEnColection = document.querySelectorAll('.rus-end');
  }

  change() {
    this.rusEnColection.forEach((el) => el.classList.toggle('active'));
  }

  storage(boolean) {
    const getLang = localStorage.getItem('Language');
    if (boolean === false) {
      if (getLang === null) {
        localStorage.setItem('Language', '1');
      } else if (getLang === '0') this.change();
    } else {
      if (getLang === '1') localStorage.setItem('Language', '0');
      else localStorage.setItem('Language', '1');
      this.change();
    }
  }
}

export default Language;
