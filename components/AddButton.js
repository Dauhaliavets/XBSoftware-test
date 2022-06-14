import { Control } from "./common/Control.js";

class AddButton extends Control {
  constructor(parent, state){
    super(parent, 'button', 'button-add', 'Add a tag');

    this.node.addEventListener('click', () => this.addNewTag(state));
    state.onChange.addObserver(this.update);
    this.update(state.data);
  }

  addNewTag = (state) => {
    const newTagContent = state.data.inputValue;
    if (newTagContent) {
      const newTags = [...state.data.tags, newTagContent];
      state.data = { ...state.data, inputValue: '', tags: newTags };
    }
  };

  update = (data) => {
    if(data.mode) {
      this.node.setAttribute("disabled", "disabled");
    } else {
      this.node.removeAttribute("disabled", "disabled");
    }
  };
}

export { AddButton };
