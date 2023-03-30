
const InitialState = {
    show: 'd-none',
   

}

export default function showReducer(state = InitialState, action) {

    switch (action.type) {

        case 'SET_SHOW':
            return { ...state, show: action.payload }
     
        default:
            return state
    }

}