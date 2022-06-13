import App from './components/App.js';
import AppState from './components/AppState.js';

console.log('Hello XB Software');

const defaultState = {
  inputValue: '',
  tags: [],
  mode: false,
};
const container = document.getElementById('container');

window.onload = () => {
  const state = JSON.parse(localStorage.getItem('savedState'));

  const appState = new AppState(state || defaultState);
  new App(container, appState);

  window.onbeforeunload = () => {
    localStorage.setItem('savedState', JSON.stringify(appState.data));
  };
};
