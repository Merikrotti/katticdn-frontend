import React, { FormEvent, useState } from 'react';


const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submitForm = async (e: FormEvent) => {
        e.preventDefault();

        await fetch("/api/login", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password
            })
        });
    }

    return (<form className="login" onSubmit={submitForm}>
        <h2>Katti CDN</h2>
        <h5>File hosting service</h5>
        <p>
        <label htmlFor='username'>Username: </label>
        <input type="text" id="username" onChange={e => setUsername(e.target.value)}></input>
        </p>
        <p>
        <label htmlFor='password'>Password: </label>
        <input type="password" id="password" onChange={e => setPassword(e.target.value)}></input>
        </p>
        <input type="submit" value="Submit"></input>
        <a href="" target="noreferrer"><img src="./GitHub-Mark-32px.png" alt="git"></img></a>
        </form>);
}

export default LoginForm;