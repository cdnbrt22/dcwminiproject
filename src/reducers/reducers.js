import { combineReducers } from "redux";
import createUser from "./signin/signin";




const reducers = combineReducers({
    signin: createUser
});


export default reducers;