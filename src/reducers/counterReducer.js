import {DECREMENT, INCREMENT} from "../constants";



let increaseVal = (state) => {

    return {value  : state.value + 1}
}

let decreaseVal = (state) => {
    return {value  : state.value - 1}
}



let initialState = {
    value  : 10
}


const counterReducer =
    (state = initialState, action) => {
        switch (action.type) {
            case INCREMENT:
                return increaseVal(state)

            case DECREMENT:
                return decreaseVal(state)

            default:
                return state

        }

    }


export default  counterReducer;
