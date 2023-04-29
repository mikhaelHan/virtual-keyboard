import Language from './Language';
import Input from './Input';

import capsLock from './capsLock';
import shift from './shift';

class KeyboardRegular {
  constructor() {
    this.changeLanguage = new Language();
    this.input = new Input();

    this.buttons = document.querySelectorAll('.keyboard__key');
  }

  // eslint-disable-next-line class-methods-use-this
  changeColor(element, boolean) {
    if (boolean) {
      element.classList.add('button-active');
    } else element.classList.remove('button-active');
  }

  press() {
    document.addEventListener('keydown', (event) => {
      if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && event.ctrlKey) {
        this.changeLanguage.storage(true);
      }

      this.buttons.forEach((el) => {
        if (event.code === 'CapsLock' && el.classList[1] === 'CapsLock') {
          capsLock(el);
        } else if (event.code === 'Space' && el.classList[1] === 'Space') {
          this.input.field.textContent += ' ';
          this.changeColor(el, true);
        } else if (event.code === 'Delete' && el.classList[1] === 'Delete') {
          this.input.field.textContent = '';
          this.changeColor(el, true);
        } else if (event.code === 'Enter' && el.classList[1] === 'Enter') {
          this.input.field.textContent += '\n';
          this.changeColor(el, true);
        } else if (event.code === 'Backspace' && el.classList[1] === 'Backspace') {
          const inputVal = this.input.field.value;
          this.input.field.textContent = inputVal.substring(0, inputVal.length - 1);
          this.changeColor(el, true);
        } else if ((event.code === 'ShiftLeft' && el.classList[1] === 'ShiftLeft') || (event.code === 'ShiftRight' && el.classList[1] === 'ShiftRight')) {
          shift();
          this.changeColor(el, true);
        } else if (event.code === el.classList[1]) {
          this.input.write(el);
          this.changeColor(el, true);
        }
      });
    });

    document.addEventListener('keyup', (event) => {
      this.buttons.forEach((el) => {
        if ((event.code === 'ShiftLeft' && el.classList[1] === 'ShiftLeft') || (event.code === 'ShiftRight' && el.classList[1] === 'ShiftRight')) {
          shift();
          this.changeColor(el, false);
        } else if (event.code === el.classList[1] && el.classList[1] !== 'CapsLock') this.changeColor(el, false);
      });
    });
  }
}

export default KeyboardRegular;
