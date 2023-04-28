import storageLang from './changeLanguage';

import CreateContent from './CreateContent';

import keyBoardRegularKeyPress from './keyboardRegular';
import keyBoardVirtualKeyPress from './keyboardVirtual';

function initApp() {
  const createContent = new CreateContent();
  createContent.writeContent();

  // storageLang(false);

  // keyBoardRegularKeyPress();
  keyBoardVirtualKeyPress();
}

export default initApp;
