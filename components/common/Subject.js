class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((item) => item !== observer);
  }

  notify(params) {
    this.observers.forEach((observer) => observer(params));
  }
}

export { Subject };
