class Control {
  constructor(
    parentElement = null,
    htmlElement = 'div',
    classList = '',
    content = ''
  ) {
    const element = document.createElement(htmlElement);
    element.className = classList;
    element.textContent = content;
    if (parentElement) {
      parentElement.append(element);
    }
    this.node = element;
  }
}

export { Control };
