import ButtonAdd from './ButtonAdd.js';
import Control from './common/Control.js';
import InputElement from './InputElement.js';
import SwitchMode from './SwitchMode.js';
import TagsList from './TagsList.js';

class App extends Control {
	constructor(parent, state) {
		super(parent, 'div', 'app');

		const update = (data) => {
			this.node.innerHTML = '';
			new InputElement(this.node, state);
			new ButtonAdd(this.node, state);
			new SwitchMode(this.node, data.mode, () => this.changeMode(state));
			new TagsList(this.node, state);
		};

		state.onChange.add(update);
		update(state.data);
	}

	changeMode = (state) => {
		const newMode = !state.data.mode;
		state.data = { ...state.data, mode: newMode };
	};
}

export default App;
