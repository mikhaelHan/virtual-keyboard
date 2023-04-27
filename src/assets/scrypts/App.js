import storageLang from './changeLanguage';
import keyBoardRegularKeyPress from './keyboardRegular';
import keyBoardVirtualKeyPress from './keyboardVirtual';

function initApp() {
  storageLang(false);
  keyBoardRegularKeyPress();
  keyBoardVirtualKeyPress();
}

export default initApp;
