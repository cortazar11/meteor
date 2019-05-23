import meteorJSON from '../api/meteorJSON';

export const fetchMeteors=()=>{
    return async (dispatch)=>{
        const response= await meteorJSON.get()

        dispatch({
            type: 'FETCH_METEORS',
            payload: response.data
        })
    }
}

export const fetchTerm=(value)=>{
    return {
        type: 'FETCH_TERM',
        payload: value
    }
}
