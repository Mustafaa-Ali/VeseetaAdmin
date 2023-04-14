
const InitialState = {
    userphone: '',
   

}

export default function userPhoneReducer(state = InitialState, action) {

    switch (action.type) {

        case 'SET_USERPHONE':
            return { ...state, userphone: action.payload }
     
        default:
            return state
    }

}