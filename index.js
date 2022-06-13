import App from "./components/App.js";
import AppState from "./components/AppState.js";

console.log("Hello XB Software")

const defaultState = {
  inputValue: '',
  tags: [],
  mode: false,
};

const container = document.getElementById('container');

const state = new AppState(defaultState);
const app = new App(container, state);
