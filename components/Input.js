import { Control } from './common/Control.js';

class Input extends Control {
  constructor(parent, state) {
    super(parent, 'input', 'tag-input');

    this.node.addEventListener('input', (e) =>
      this.setInputValue(state, e.target.value)
    );
    state.onChange.addObserver(this.update);
    this.update(state.data);
  }

  setInputValue = (state, newValue) => {
    state.data.inputValue = newValue;
  };

  update = (data) => {
    this.node.value = data.inputValue;
  };
}

export { Input };
