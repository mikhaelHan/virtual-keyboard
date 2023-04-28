import selectors from './docSelectors';

import capsLockPress from './capsLock';
import shift from './shift';

import inputWrite from './inputWrite';

function keyBoardVirtualKeyPress() {
  console.log( selectors.virtualKlava)
  const virtualKlava = document.querySelector('.keyboard__content')

  virtualKlava.addEventListener('click', (event) => {
  console.log(event)

    if (event.target.closest('.CapsLock')) {
      const el = event.target.closest('.CapsLock');
      capsLockPress(el);
    } else if (event.target.closest('.Space')) selectors.input.textContent += ' ';
    else if (event.target.closest('.Delete')) selectors.input.textContent = '';
    else if (event.target.closest('.Enter')) selectors.input.textContent += '\n';
    else if (event.target.closest('.Backspace')) selectors.input.textContent = selectors.input.value.substring(0, selectors.input.value.length - 1);
    else if (event.target.closest('.Tab')) selectors.input.textContent += '    ';
    else if (event.target.closest('.keyboard__key')) {
      const el = event.target.closest('.keyboard__key');
      inputWrite(el);
    }
  });

  virtualKlava.addEventListener('mousedown', (event) => {
    if (event.target.closest('.ShiftLeft') || event.target.closest('.ShiftRight')) {
      shift();
    }
  });

  virtualKlava.addEventListener('mouseup', (event) => {
    if (event.target.closest('.ShiftLeft') || event.target.closest('.ShiftRight')) {
      shift();
    }
  });
}

export default keyBoardVirtualKeyPress;
