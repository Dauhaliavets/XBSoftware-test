class Signal {
  constructor() {
    this.listeners = [];
  }

  add(listener) {
    this.listeners.push(listener);
  }

  remove(listener) {
    this.listeners = this.listeners.filter((item) => item !== listener);
  }

  emit(params) {
    this.listeners.forEach((listener) => listener(params));
  }
}

export default Signal;
