import Signal from './common/Signal.js';

class AppState {
  constructor(initialState) {
    this._data = initialState;
    this.onChange = new Signal();
  }

  get data() {
    return this._data;
  }

  set data(value) {
    this._data = value;
    this.onChange.emit(this._data);
  }
}

export default AppState;
