import { Control } from './common/Control.js';

class ModeButton extends Control {
  constructor(parent, state) {
    super(parent, 'input', 'checkbox-mode');

    this.node.setAttribute('type', 'checkbox');
    this.node.addEventListener('input', () => this.changeMode(state));
    state.onChange.addObserver(this.update);
    this.update(state.data);
  }

  changeMode = (state) => {
    state.data = { ...state.data, mode: !state.data.mode };
  };

  update = (data) => {
    if (data.mode) {
      this.node.checked = true;
    } else {
      this.node.checked = false;
    }
  }
}

export { ModeButton };
