import { combineReducers, legacy_createStore as createStore } from 'redux';
import ordersReducer from './orders-reducer';

/*const reducers = combineReducers({
    ordersPage: ordersReducer
})*/
  
const store = createStore(ordersReducer);
export default store;