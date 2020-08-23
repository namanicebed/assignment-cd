import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import home from './Home/reducer';

const rootReducer = combineReducers({
  home,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
