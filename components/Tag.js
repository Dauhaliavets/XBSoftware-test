import Control from './Control.js';

class Tag extends Control {
  constructor(parent, content, state, callback) {
    super(parent, 'li', 'tag', content);

    this.state = state;
    this.btnDelete = new Control(this.node, 'span', 'btnDelete', 'X');
    this.btnDelete.node.addEventListener('click', (e) => callback(content));
  }
}

export default Tag;
