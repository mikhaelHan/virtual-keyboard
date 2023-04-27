import selectors from './docSelectors';

import capsLockPress from './capsLock';
import storageLang from './changeLanguage';
import shift from './shift';

import inputWrite from './inputWrite';

function changeColor(element, boolean) {
  if (boolean) {
    element.classList.add('button-active');
  } else element.classList.remove('button-active');
}

function keyBoardRegularKeyPress() {
  document.addEventListener('keydown', (event) => {
    if ((event.code === 'ShiftLeft' && event.ctrlKey) || event.metaKey) {
      storageLang(true);
    }

    selectors.buttons.forEach((el) => {
      if (event.code === 'CapsLock' && el.classList[1] === 'CapsLock') {
        capsLockPress(el);
      } else if (event.code === 'Space' && el.classList[1] === 'Space') {
        selectors.input.textContent += ' ';
        changeColor(el, true);
      } else if (event.code === 'Delete' && el.classList[1] === 'Delete') {
        selectors.input.textContent = '';
        changeColor(el, true);
      } else if (event.code === 'Enter' && el.classList[1] === 'Enter') {
        selectors.input.textContent += '\n';
        changeColor(el, true);
      } else if (event.code === 'Backspace' && el.classList[1] === 'Backspace') {
        const inputVal = selectors.input.value;
        selectors.input.textContent = inputVal.substring(0, inputVal.length - 1);
        changeColor(el, true);
      } else if ((event.code === 'ShiftLeft' && el.classList[1] === 'ShiftLeft') || (event.code === 'ShiftRight' && el.classList[1] === 'ShiftRight')) {
        shift();
        changeColor(el, true);
      } else if (event.code === el.classList[1]) {
        inputWrite(el);
        changeColor(el, true);
      }
    });
  });

  document.addEventListener('keyup', (event) => {
    selectors.buttons.forEach((el) => {
      if ((event.code === 'ShiftLeft' && el.classList[1] === 'ShiftLeft') || (event.code === 'ShiftRight' && el.classList[1] === 'ShiftRight')) {
        shift();
        changeColor(el, false);
      } else if (event.code === el.classList[1] && el.classList[1] !== 'CapsLock') changeColor(el, false);
    });
  });
}

export default keyBoardRegularKeyPress;
