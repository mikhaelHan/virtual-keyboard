import selectors from './docSelectors';

function inputWrite(element) {
  if (element.querySelector('.rus-end.active')) {
    selectors.input.textContent += element.querySelector('.rus-end.active').querySelector('.case.active').getAttribute('value');
  }
}

export default inputWrite;
