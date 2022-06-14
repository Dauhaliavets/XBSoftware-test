import { Control } from './common/Control.js';

class Tag extends Control {
  constructor(parent, tag, mode, deleteHandler) {
    super(parent, 'li', 'tag-item', tag);

    if (mode) {
      this.node.classList.add('tag-item_disabled');
    }

    this.deleteBtn = new Control(this.node, 'span', 'button-delete', 'X');
    this.deleteBtn.node.addEventListener('click', () => deleteHandler()(tag));
  }
}

export { Tag };
