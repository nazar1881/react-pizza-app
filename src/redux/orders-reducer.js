const initialState = {
    totalPrice: 0,
    orders: []
}
  
const ordersReducer = (state = initialState, action) => {
    switch(action.type) {
      case "ADD_ITEM":
        /*return {...state, orders: state.orders.push(action.payload)}*/
        return {...state, orders: [...state.orders, action.payload]}
      case "DELETE_ITEM":
        return {...state, orders: state.orders.filter(o => o.id != action.payload)}
      /*case "INC_ITEM":
        return {...state, ...state.orders, ...state.orders.count, count: count++}
      case "DEC_ITEM":
        return {...state, ...state.orders, ...state.orders.count, count: count--}*/
      default: 
        return state;
    }
}

export default ordersReducer;