import { AddButton } from './AddButton.js';
import { Control } from './common/Control.js';
import { Input } from './Input.js';
import { ModeButton } from './ModeButton.js';
import { TagsList } from './TagsList.js';

class App extends Control {
  constructor(parent, state) {
    super(parent, 'div', 'app');

    new Input(this.node, state);
    new AddButton(this.node, state);
    new ModeButton(this.node, state);
    new TagsList(this.node, state);
  }
}

export { App };
