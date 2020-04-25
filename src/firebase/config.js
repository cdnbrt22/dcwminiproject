import firebase from "firebass/app";
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"


const config = {
    apiKey: "AIzaSyB-wPW0V6vDWXtm5CbvWo_O0ohzEG-EUfo",
    authDomain: "dcw-miniproject-blog.firebaseapp.com",
    databaseURL: "https://dcw-miniproject-blog.firebaseio.com",
    projectId: "dcw-miniproject-blog",
    storageBucket: "dcw-miniproject-blog.appspot.com",
    messagingSenderId: "272536941780",
    appId: "1:272536941780:web:f16008c94cd0999f69b741"
}

class Firebase {
    constructor(){
        firebase.initiallizeApp(config);
        auth = firebase.auth();
        db = firebase.firestore();
    }
    
    async signin(email, password){
        const user = await firebase.auth().createUserWithEmailAndPassword(email, password).catch(err =>{
            console.log(err);
        });
        return user;
    }

    async login(email, password){
        const user = await firebase.auth().signInWithEmailAndPassword(email, password).catch(err =>{
            console.log(err);
        });
        return user;
    }

    async logout(){
        const logout = await firebase.auth().signOut().catch(err => {
            console.log(err);
        });
        return logout;
    }

}


export default new firebase();