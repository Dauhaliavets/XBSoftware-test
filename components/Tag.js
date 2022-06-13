import Control from './common/Control.js';

class Tag extends Control {
  constructor(parent, content, mode, handler) {
    super(parent, 'li', 'tag-item', content);

    if(mode) {
      this.node.classList.add('tag-item_disabled')
    }

    this.btnDelete = new Control(this.node, 'span', 'button-delete', 'X');
    this.btnDelete.node.addEventListener('click', () => {
      if(!mode) {
        handler()(content);
      }
    });
  }
}

export default Tag;
