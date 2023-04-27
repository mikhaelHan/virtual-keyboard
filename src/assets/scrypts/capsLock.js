import selectors from './docSelectors';

function capsLockPress(element) {
  element.classList.toggle('active');
  selectors.case.forEach((el) => el.classList.toggle('active'));
}

export default capsLockPress;
