import {applyMiddleware, combineReducers, createStore} from "redux";
import {weather} from "./wether";
import thunk from "redux-thunk";

const reducerPac = combineReducers({
    weather: weather
})


export const store = createStore(reducerPac, applyMiddleware(thunk));

window.store = store