import Control from './common/Control.js';

class SwitchMode extends Control {
  constructor(parent, state) {
    super(parent, 'input', 'checkbox-mode');

    this.node.setAttribute('type', 'checkbox');
    this.node.addEventListener('input', () => this.changeMode(state));
    state.onChange.add(this.update);
    this.update(state.data);
  }

  changeMode = (state) => {
    const newMode = !state.data.mode;
    state.data = { ...state.data, mode: newMode };
  };

  update = (data) => {
    if (data.mode) {
      this.node.checked = true;
    } else {
      this.node.checked = false;
    }
  }
}

export default SwitchMode;
