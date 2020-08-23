import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import home from './Home/reducer';

const rootReducer = combineReducers({
  home,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
