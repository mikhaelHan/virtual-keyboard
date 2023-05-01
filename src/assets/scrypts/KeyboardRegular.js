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

  findElement(element) {
    let result;

    this.buttons.forEach((el) => {
      if (element === el.classList[1]) { result = el; }
    });

    return result;
  }

  press() {
    document.addEventListener('keydown', (event) => {
      const activElement = this.findElement(event.code);

      if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && event.ctrlKey) {
        this.changeLanguage.storage(true);
      } if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        shift();
        this.changeColor(activElement, true);
      } else if (event.code === 'CapsLock') {
        capsLock(activElement);
      } else if (event.code === 'Space') {
        this.input.field.textContent += ' ';
        this.changeColor(activElement, true);
      } else if (event.code === 'Delete') {
        this.input.field.textContent = '';
        this.changeColor(activElement, true);
      } else if (event.code === 'Enter') {
        this.input.field.textContent += '\n';
        this.changeColor(activElement, true);
      } else if (event.code === 'Backspace' && activElement.classList[1] === 'Backspace') {
        const inputVal = this.input.field.value;
        this.input.field.textContent = inputVal.substring(0, inputVal.length - 1);
        this.changeColor(activElement, true);
      } else if (event.code === 'Tab') {
        event.preventDefault();
        this.input.field.textContent += '    ';
        this.changeColor(activElement, true);
      } else if (event.code === 'AltLeft' || event.code === 'AltRight') {
        event.preventDefault();
        this.changeColor(activElement, true);
      } else if (event.code === 'ControlLeft' || event.code === 'ControlRight') {
        event.preventDefault();
        this.changeColor(activElement, true);
      } else if (event.code === 'ArrowUp' || event.code === 'ArrowLeft' || event.code === 'ArrowRight' || event.code === 'ArrowDown') {
        event.preventDefault();
        this.input.field.textContent += activElement.firstElementChild.textContent;
        this.changeColor(activElement, true);
      } else {
        this.input.write(activElement);
        this.changeColor(activElement, true);
      }
    });

    document.addEventListener('keyup', (event) => {
      const activElement = this.findElement(event.code);

      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        shift();
        this.changeColor(activElement, false);
      } else if (event.code !== 'CapsLock') {
        this.changeColor(activElement, false);
      }
    });
  }
}

export default KeyboardRegular;
