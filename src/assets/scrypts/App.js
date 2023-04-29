import CreateContent from './CreateContent';

import BoardRegul from './BoardRegul';
import Language from './Language';

class App {
  constructor() {
    this.createContent = new CreateContent();
  }

  init() {
    this.createContent.writeContent();

    const language = new Language();
    language.storage(false);

    const boardRegul = new BoardRegul();
    boardRegul.press();
  }
}

export default App;
