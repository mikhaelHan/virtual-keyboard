import CreateContent from './CreateContent';

import KeyboardRegular from './KeyboardRegular';
import KeyboardVirtual from './KeyboardVirtual';
import Language from './Language';

class App {
  constructor() {
    this.createContent = new CreateContent();
  }

  init() {
    this.createContent.writeContent();

    const language = new Language();
    language.storage(false);

    const keyboardRegular = new KeyboardRegular();
    keyboardRegular.press();

    const keyboardVirtual = new KeyboardVirtual();
    keyboardVirtual.press();
  }
}

export default App;
