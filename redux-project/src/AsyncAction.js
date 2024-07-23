const redux = require("redux")
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios")

/*-------State-------*/
const initialState = {
    loading: true,
    data: [],
    error: "",
}

/*------Action---------*/
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST"
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE"

/*-------First Action----------*/
const FetchUsersRequest = () => {
    return{
        type: FETCH_USERS_REQUEST
    }
}

const FetchUsersSucess = (users) => {
    return{
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const FetchUsersFailure = (error) => {
    return{
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: ""
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                data: [],
                error: action.payload
            }
        default:
            return state
    }
}
const fetchUser = () => {
    return function(dispatch) {
        dispatch(FetchUsersRequest())
        axios
          .get("https://jsonplaceholder.typicode.com/users/2")
          .then((response) => {
            const user = response.data
            dispatch(FetchUsersSucess(user))
          })
          .catch((error) => {
            dispatch(FetchUsersFailure(error.message))
          })
    }
}
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch(fetchUser())