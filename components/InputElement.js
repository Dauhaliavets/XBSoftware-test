import Control from './common/Control.js';

class InputElement extends Control {
  constructor(parent, state) {
    super(parent, 'input', 'input');

    this.node.value = state.data.inputValue;
    this.node.addEventListener('input', (e) =>
      this.changeInputValue(state, e.target.value)
    );
    state.onChange.add(this.update);
    this.update(state.data);
  }

  changeInputValue = (state, newValue) => {
    state.data.inputValue = newValue;
  };

  update = (data) => {
    this.node.value = data.inputValue;
  };
}

export default InputElement;
