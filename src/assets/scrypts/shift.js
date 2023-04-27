import selectors from './docSelectors';

function shift() {
  selectors.case.forEach((el) => el.classList.toggle('active'));
}

export default shift;
