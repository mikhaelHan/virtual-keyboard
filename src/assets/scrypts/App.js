import storageLang from './changeLanguage';
import keyBoardRegularKeyPress from './keyboardRegular';

function initApp() {
  storageLang(false);
  keyBoardRegularKeyPress();
}

export default initApp;
