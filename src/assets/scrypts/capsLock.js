function capsLock(element) {
  element.classList.toggle('active');
  const shiftColection = document.querySelectorAll('.case');
  shiftColection.forEach((el) => el.classList.toggle('active'));
}

export default capsLock;
