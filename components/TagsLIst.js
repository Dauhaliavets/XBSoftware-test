import Control from './Control.js';
import Tag from './Tag.js';

class TagsList extends Control {
  constructor(parent, state, callback) {
    super(parent, 'ul', 'tag-list');

    state.tags.forEach((tagContent) => {
      new Tag(this.node, tagContent, state.mode, callback);
    });
  }
}

export default TagsList;
