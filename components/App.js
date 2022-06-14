import ButtonAdd from './ButtonAdd.js';
import Control from './common/Control.js';
import InputElement from './InputElement.js';
import SwitchMode from './SwitchMode.js';
import TagsList from './TagsList.js';

class App extends Control {
  constructor(parent, state) {
    super(parent, 'div', 'app');

    new InputElement(this.node, state);
    new ButtonAdd(this.node, state);
    new SwitchMode(this.node, state);
    new TagsList(this.node, state);
  }
}

export default App;
