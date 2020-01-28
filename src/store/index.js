import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import reducers from './reducers';

const reducer = combineReducers(reducers);


export default () => {
  
  const store = createStore(reducer, applyMiddleware(thunk));


  return store;
};
