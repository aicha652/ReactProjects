const redux = require("redux")
const createStore = redux.createStore
const combineRducers = redux.combineReducers


const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux Action"
  }
}

function buyIcecream() {
  return {
    type: BUY_ICECREAM,
  }
}

/*const initialState = {
  numberOfCakes : 10,
  numberOfIcecreams: 20
}*/

const initialCakeState = {
  numberOfCakes : 10
}

const initialIcecreamState = {
  numberOfIcecreams: 20
}

/*const reducer = (state = initialState, action) => {
  switch(action.type){
    case "BUY_CAKE":
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1
      }
    case "BUY_ICECREAM":
      return{
        ...state,
        numberOfIcecreams : state.numberOfIcecreams - 1
      }
    default:
      return state
  }
}*/


const cakeReducer = (state = initialCakeState, action) => {
  switch(action.type){
    case "BUY_CAKE":
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1
      }
    default:
      return state
  }
}

const icecreamReducer = (state = initialIcecreamState, action) => {
  switch(action.type){
    case "BUY_ICECREAM":
      return{
        ...state,
        numberOfIcecreams : state.numberOfIcecreams - 1
      }
    default:
      return state
  }
}

const rootReducer = combineRducers({
  cake: cakeReducer,
  iceCream: icecreamReducer
})

const store = createStore(rootReducer)
console.log("initial state", store.getState())
const unsubscribe = store.subscribe(() => {
  console.log("Updates state", store.getState())
})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unsubscribe()