import { FETCHED, FETCH_START } from '../Action'
const initialRe = {
    data : [],
    loading : false
}
const statusReducer = (state= initialRe, action)=> {
    switch (action.type) {
        case FETCHED:
            return {...state, data : action.data, loading : false}
        case FETCH_START:
            return {...state, loading : true}
        default:
            return state;
    }
}

export default statusReducer