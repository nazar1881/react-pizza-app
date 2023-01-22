import { combineReducers, legacy_createStore as createStore } from 'redux';
import drinksReducer from './drinks-reducer';
import ordersReducer from './orders-reducer';
import shaurmasReducer from './shaurmas-reducer';

const reducers = combineReducers({
    orders: ordersReducer,
    shaurmas: shaurmasReducer,
    drinks: drinksReducer
})
  
const store = createStore(reducers);
export default store;