const initialValue = {
    card:{},
    filters: {}
}
 function cardReducer(state =  initialValue, action){
    switch(action.type){
        case 'SET_CARD':     
        return{
            ...state,
            card: action.payload 
        }
        case 'UPDATE_QUANTITY':     
        return{
            ...state,
            // card: action.payload 
        }
        case 'SEARCH':     
        return{
            ...state,
            search: action.payload 
        }
    }
    return state
} 
export default cardReducer