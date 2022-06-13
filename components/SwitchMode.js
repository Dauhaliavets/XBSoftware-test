import Control from "./common/Control.js";

class SwitchMode extends Control {
  constructor(parent, mode, callback) {
    super(parent, 'input', 'checkbox-mode');
    this.node.setAttribute('type', 'checkbox');

    if(mode) {
      this.node.checked = true;
    } else {
      this.node.checked = false;
    }

    this.node.addEventListener('input', () => callback())
  }
}

export default SwitchMode;
