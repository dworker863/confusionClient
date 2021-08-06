import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMidlleware from 'redux-thunk';

import dishes from './reducers/dishes';
import leaders from './reducers/leaders';
import promotions from './reducers/promotions';

const reducers = combineReducers({
  dishes,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMidlleware)),
);

export default store;