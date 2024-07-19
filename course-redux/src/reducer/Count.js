export const reducer = (state = {x : 0}, action) => {
    if(action.type === "plus") {
        return{x: state.x + 1}
    }
    else if(action.type === "minse"){
        return{x: state.x - 1}
    }
    return state
}