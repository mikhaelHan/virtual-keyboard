import selectors from './DocSelectors';

function changeLang() {
  selectors.rusEnd.forEach((el) => el.classList.toggle('active'));
}

function StorageLang(boolean) {
  const getLang = localStorage.getItem('Language');
  if (boolean === false) {
    if (getLang === null) {
      localStorage.setItem('Language', '1');
    } else if (getLang === '0') changeLang();
  } else {
    if (getLang === '1') localStorage.setItem('Language', '0');
    else localStorage.setItem('Language', '1');
    changeLang();
  }
}

export default StorageLang;
