import { DECREASE, INCREASE, RESET, SAVE_INFO } from "../constants/formConstants"

export const increaseStep = () => {
    return {
        type: INCREASE
    }
}
export const decreaseStep = () => {
    return {
        type: DECREASE
    }
}
export const resetStep = () => {
    return {
        type: RESET
    }
}
export const SaveInfo = (data) => {
    return {
        type: SAVE_INFO,
        payload: data
    }
}