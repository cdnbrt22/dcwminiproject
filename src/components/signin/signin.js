import React, { useState } from "react";
// import { useDispattch } from


const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signin = (e) => {
        e.preventDefault();
        console.log("user created");
    }


    return(
        <React.Fragment>
            <from onSubmit = {signin}>
                <p>Create an account</p>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="password">Password: </label>
                <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />

                <input type="submit" value="Create account" />
            </from>
        </React.Fragment>
    )
}

export default Signin;