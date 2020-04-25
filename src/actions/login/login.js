import firebase from "../firebase/config";

const loginUser = (email, password) => { 
    return async function (dispatch){
        const user = await firebase.login(email, email).catch(error => console.log(error));

        if(user){
            dispatch({type: "LOGIN_USER", paylode: user});
            return user;
        };
    };
}

export default loginUser;