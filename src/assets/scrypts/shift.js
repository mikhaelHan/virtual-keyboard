function shift() {
  const shiftColection = document.querySelectorAll('.case');
  shiftColection.forEach((el) => el.classList.toggle('active'));
}

export default shift;
