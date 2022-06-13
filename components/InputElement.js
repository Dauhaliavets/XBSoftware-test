import Control from './common/Control.js';

class InputElement extends Control {
  constructor(parent, state) {
    super(parent, 'input', 'input');

    this.node.value = state.data.inputValue;
    this.node.addEventListener('input', (e) =>
      this.changeInputValue(state, e.target.value)
    );
  }

  changeInputValue = (state, newValue) => {
    state.data.inputValue = newValue;
  };
}

export default InputElement;
