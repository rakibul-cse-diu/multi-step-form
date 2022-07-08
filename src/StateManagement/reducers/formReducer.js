import { DECREASE, INCREASE, SAVE_INFO } from "../constants/formConstants";

const initialFormState = {
    step: 1,
    userInfo: {}
}

const formReducer = (state = initialFormState, action) => {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                step: state.step + 1
            };

        case DECREASE:
            return {
                ...state,
                step: state.step - 1
            };

        case SAVE_INFO:
            return {
                ...state,
                userInfo: action.payload
            };

        default:
            return state;
    }
}

export default formReducer;