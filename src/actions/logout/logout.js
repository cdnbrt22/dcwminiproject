import firebase from "../firebase/config";

const logoutUser = () => {
    return async function(dispatch){
        await firebase.logout()
        dispatch({type: "LOGIN_USER", payload: {} });
        dispatch({type: "CREATE_USER", payload: {} })
    }

}

export default logoutUser;

