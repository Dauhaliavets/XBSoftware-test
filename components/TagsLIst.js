import Control from './common/Control.js';
import Tag from './Tag.js';

class TagsList extends Control {
  constructor(parent, state) {
    super(parent, 'ul', 'tags-list');

    const update = (data) => {
      this.node.innerHTML = '';
      data.tags.forEach((tagContent) => {
        new Tag(this.node, tagContent, data.mode, () => this.handlerDeleteTag(state));
      });
    };

    state.onChange.add(update);
    update(state.data);
  }

  handlerDeleteTag = (state) => {
    return function(value) {
      const newTags = state.data.tags.filter((tag) => tag !== value);
      state.data = { ...state.data, tags: newTags };
    }
  };
}

export default TagsList;
