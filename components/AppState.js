import { Subject } from './common/Subject.js';

class AppState {
  constructor(initialState) {
    this._data = initialState;
    this.onChange = new Subject();
  }

  get data() {
    return this._data;
  }

  set data(value) {
    this._data = value;
    this.onChange.notify(this._data);
  }
}

export { AppState };
