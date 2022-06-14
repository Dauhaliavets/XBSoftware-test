import Control from "./common/Control.js";

class ButtonAdd extends Control {
  constructor(parent, state){
    super(parent, 'button', 'button-add', 'Add a tag');

    this.node.addEventListener('click', () => this.addTag(state));
    state.onChange.add(this.update);
    this.update(state.data);
  }

  addTag = (state) => {
    const value = state.data.inputValue;
    if (value) {
      const newTags = [...state.data.tags, value];
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

export default ButtonAdd;
