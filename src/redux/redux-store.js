import { combineReducers, legacy_createStore as createStore } from 'redux';
import ordersReducer from './orders-reducer';
import shaurmasReducer from './shaurmas-reducer';

const reducers = combineReducers({
    orders: ordersReducer,
    shaurmas: shaurmasReducer
})
  
const store = createStore(reducers);
export default store;