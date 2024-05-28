import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  // reducerlər burada yerləşdiriləcək
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
