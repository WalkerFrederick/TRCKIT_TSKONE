import { createStore } from "redux";
import rootReducer from "../reducers/index";
import throttle from 'lodash.throttle';
import {loadState, saveState} from '../localStorage/localStorage'

const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState
);
store.subscribe(throttle(() => {
    saveState({
      employees: store.getState().employees
    });
  }, 1000));


export default store;