const initState = {
    test: "testing"
}

const rootReducer = (state = initState, action) => {
    
    console.log(action.type, "ACTION IN REDUCER")

    return state;
}

export default rootReducer