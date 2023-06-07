import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { dataReducer } from "./dreducer/dataReducer";




const reducer=combineReducers({

    reducer2:dataReducer
})


const middleware=[thunk]

const store=createStore(reducer,applyMiddleware(...middleware))

export default store