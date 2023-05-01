import Input from './Input';

import capsLock from './capsLock';
import shift from './shift';

class KeyboardVirtual {
  constructor() {
    this.input = new Input();

    this.virtualKlava = document.querySelector('.keyboard__content');
  }

  press() {
    this.virtualKlava.addEventListener('click', (event) => {
      if (event.target.closest('.CapsLock')) {
        const el = event.target.closest('.CapsLock');
        capsLock(el);
      } else if (event.target.closest('.Space')) this.input.field.textContent += ' ';
      else if (event.target.closest('.Delete')) this.input.field.textContent = '';
      else if (event.target.closest('.Enter')) this.input.field.textContent += '\n';
      else if (event.target.closest('.Backspace')) this.input.field.textContent = this.input.field.value.substring(0, this.input.field.value.length - 1);
      else if (event.target.closest('.Tab')) this.input.field.textContent += '    ';
      else if (event.target.closest('.ArrowUp')) this.input.field.textContent += '˄';
      else if (event.target.closest('.ArrowLeft')) this.input.field.textContent += '˂';
      else if (event.target.closest('.ArrowDown')) this.input.field.textContent += '˅';
      else if (event.target.closest('.ArrowRight')) this.input.field.textContent += '˃';
      else if (event.target.closest('.keyboard__key')) {
        const el = event.target.closest('.keyboard__key');
        this.input.write(el);
      }
    });

    this.virtualKlava.addEventListener('mousedown', (event) => {
      if (event.target.parentElement.classList[1] === 'ShiftLeft' || event.target.parentElement.classList[1] === 'ShiftRight') {
        shift();
      }
    });

    this.virtualKlava.addEventListener('mouseup', (event) => {
      if (event.target.parentElement.classList[1] === 'ShiftLeft' || event.target.parentElement.classList[1] === 'ShiftRight') {
        shift();
      }
    });
  }
}

export default KeyboardVirtual;
