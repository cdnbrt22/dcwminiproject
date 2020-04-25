import { combineReducers } from "redux";
import createUser from "./signin/signin";
import logoutUser from "./logout/logout";
import loginUser from "./login/login";




const reducers = combineReducers({
    signIn: createUser,
    logIn: loginUser,
    logOut: logoutUser,

});


export default reducers;