import Control from "./common/Control.js";

class ButtonAdd extends Control {
  constructor(parent, state){
    super(parent, 'button', 'button-add', 'Add a tag');

    const addTag = (state) => {
      const value = state.data.inputValue;
      if (value) {
        const newTags = [...state.data.tags, value];
        state.data = { ...state.data, inputValue: '', tags: newTags };
      }
    };

    this.node.addEventListener('click', () => addTag(state));

    const update = (data) => {
      if(data.mode) {
        this.node.setAttribute("disabled", "disabled");
      } else {
        this.node.removeAttribute("disabled", "disabled");
      }
    };

    state.onChange.add(update);
    update(state.data);
  }
}

export default ButtonAdd;
