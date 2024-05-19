import * as actions from '../actions'

const initState = {
    isLoading: false,
}

const controlReducer = (state = initState, action: any) => {
    switch (action.type) {
        case actions.SWITCH_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            }
        default:
            return state
    }
}

export default controlReducer
