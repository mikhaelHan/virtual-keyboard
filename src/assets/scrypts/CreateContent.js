import data from './data.json';

class CreateContent {
  constructor() {
    this.body = document.querySelector('.body');
  }

  createEl(elementName, className, content, value) {
    this.element = document.createElement(elementName);
    this.element.className = className;
    if (content) this.element.textContent = content;
    if (value) this.element.setAttribute('value', value);
    return this.element;
  }

  writeContent() {
    const keyboardContent = this.createEl('div', 'keyboard__content', false, false);

    const dataLine = Object.keys(data);

    dataLine.forEach((elLine) => {
      const lineContainer = this.createEl('div', elLine, false, false);

      const buttons = (Object.keys(data[elLine]));

      buttons.forEach((elButton) => {
        const button = this.createEl('div', elButton, false, false);

        const dataButton = Object.keys(data[elLine][elButton]);

        if (dataButton.length === 2) {
          dataButton.forEach((elLang) => {
            const partOfButton = this.createEl('span', elLang, false, false);

            const symbolsButton = data[elLine][elButton][elLang];

            const symbolButtonRus = this.createEl('span', 'case', symbolsButton[1], symbolsButton[0]);
            const symbolButtonAng = this.createEl('span', 'case active', symbolsButton[3], symbolsButton[2]);

            partOfButton.append(symbolButtonRus);
            partOfButton.append(symbolButtonAng);

            button.append(partOfButton);
          });
        } else {
          const buttonClass = Object.keys(data[elLine][elButton])[0];
          const buttonContent = data[elLine][elButton][buttonClass];

          const symbolButton = this.createEl('span', buttonClass, buttonContent, false);

          button.append(symbolButton);
        }
        lineContainer.append(button);
      });
      keyboardContent.append(lineContainer);
    });

    const keyboard = this.createEl('div', 'keyboard', false, false);
    keyboard.append(keyboardContent);

    const input = this.createEl('textarea', 'input', false, false);
    const title = this.createEl('h1', 'title', 'RSS Виртуальная клавиатура', false);
    const explanationFirst = this.createEl('p', 'text', 'Клавиатура создана в операционной системе Windows', false);
    const explanationSecond = this.createEl('p', 'text', 'Для переключения языка комбинация: левыe "ctrl + shift"', false);

    const content = this.createEl('div', 'content', false, false);
    content.append(title);
    content.append(input);
    content.append(keyboard);
    content.append(explanationFirst);
    content.append(explanationSecond);

    const wrapper = this.createEl('div', 'wrapper', false, false);
    wrapper.append(content);

    this.body.append(wrapper);
  }
}

export default CreateContent;
