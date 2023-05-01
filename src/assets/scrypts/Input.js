class Input {
  constructor() {
    this.field = document.querySelector('.input');
  }

  write(element) {
    if (element.querySelector('.rus-end.active')) {
      this.field.textContent += element.querySelector('.rus-end.active').querySelector('.case.active').getAttribute('value');
    }
  }
}

export default Input;
