import { Control } from './common/Control.js';
import { Tag } from './Tag.js';

class TagsList extends Control {
  constructor(parent, state) {
    super(parent, 'ul', 'tags-list');

    this.state = state;
    state.onChange.addObserver(this.update);
    this.update(state.data);
  }

  deleteTag = (state) => {
    return function (value) {
      const newTags = state.data.tags.filter((tag) => tag !== value);
      state.data = { ...state.data, tags: newTags };
    };
  };

  update = (data) => {
    const { tags, mode } = data;
    this.node.innerHTML = '';

    tags.forEach((tag) => {
      new Tag(this.node, tag, mode, () => this.deleteTag(this.state));
    });
  };
}

export { TagsList };
