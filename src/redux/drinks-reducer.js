const initialState = {
    drinks: []
}
  
const drinksReducer = (state = initialState, action) => {
    switch(action.type) {
      case "SET_DRINKS": 
        return { ...state, drinks: action.payload }
      default: 
        return state;
    }
}

export default drinksReducer;