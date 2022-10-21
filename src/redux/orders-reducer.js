const initialState = {
    orders: []
}
  
const ordersReducer = (state = initialState, action) => {
    switch(action.type) {
      case "ADD_ITEM":
        /*return {...state, orders: state.orders.push(action.payload)}*/
        return {...state, orders: [...state.orders, action.payload]}
      case "DELETE_ITEM":
        return {...state, orders: state.orders.filter(o => o.id != action.orderId)}
      default: 
        return state;
    }
}

export default ordersReducer;