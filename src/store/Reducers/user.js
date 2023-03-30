
const InitialState = {
    user: null,
   

}

export default function userReducer(state = InitialState, action) {

    switch (action.type) {

        case 'SET_USER':
            return { ...state, user: action.payload }
     
        default:
            return state
    }

}