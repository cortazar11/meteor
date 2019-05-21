const initialState={
    items: [],
    term: ''
}

export default (state=initialState,action)=>{
        switch(action.type){
            case 'FETCH_METEORS':
                return {...state, items: action.payload}
            case 'FETCH_TERM':
                return {
                    ...state,
                    term: action.payload
                }
            default:
                return state
        }
}