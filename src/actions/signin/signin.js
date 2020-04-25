import firebase from "../firebase/config";

const createUser = (email, password) =>{
    return async function(dispatch){
        const user = await firebase.signin(email, password);
            const user = await firebase.signin(email, password);
            console.log(user);
            dispatch({type: "CREATE_USER", paylode: user});
    };
}

export default createUser;