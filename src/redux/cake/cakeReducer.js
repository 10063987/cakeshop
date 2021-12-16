import { BUY_CAKE } from "./cakeTypes"

const initialState = {
    numOfCakes: 10
}


const cakeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        default: return state
    }
}

export default cakeReducer