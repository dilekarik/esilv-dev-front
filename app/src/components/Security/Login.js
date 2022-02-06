import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";

import './Login.css';

// function loginUser(credentials) {
//     return fetch('http://fauques.freeboxos.fr:3000/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(credentials)
//     })
//       .then(data => data.json())
// }

function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     const token = loginUser({
    //       username,
    //       password
    //     });
    //     setToken(token);
    // }


    function handleSubmit(e) {
      e.preventDefault();
      fetch("http://fauques.freeboxos.fr:3000/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username,
          password
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("token", data.token);
          setToken(data.token);
          console.log(jwtDecode(data.token));
        });
    }

    return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    )
}

export default Login;