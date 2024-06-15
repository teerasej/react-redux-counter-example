import action from "./action"

const initialState = {
    count: 0
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case action.Actions.ADD_NUMBER:
        console.log(type, payload)
        return { ...state, count: state.count + payload }

    case action.Actions.SUBTRACT_NUMBER: // Handle the SUBTRACT_NUMBER action
        return { ...state, count: state.count - payload }

    default:
        return state
    }
}
