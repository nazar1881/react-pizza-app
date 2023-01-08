const initialState = {
    shaurmas: []
}
  
const shaurmasReducer = (state = initialState, action) => {
    switch(action.type) {
      case "SET_SHAURMAS": 
        return { ...state, shaurmas: action.payload }
      /*case "INC_COUNT": 
        return { ...state, shaurmas: action.payload }
      case "DEC_COUNT": 
        return { ...state, shaurmas: action.payload }*/
      default: 
        return state;
    }
}

export default shaurmasReducer;