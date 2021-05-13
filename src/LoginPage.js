import React, {useState} from 'react';
import {message} from 'antd';
import 'antd/dist/antd.css';


function LoginPage({ Login, error }) {
    const [details, setDetails] = useState({email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);

    }
    

    return (
        <form onSubmit={submitHandler}>
            <dev className="inner">
                <center><h1>LOGIN PAGE</h1></center>
                {(error != "") ? ( <div className="error">{error}</div>) : ""}
                <dev className="group">
                    <label htmlFor="email">Email</label> <br/>
                    <input type="text" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </dev><br/> 
                <dev className="group">
                    <label htmlFor="password">Password</label><br/>
                    <input type="password" name="password" id="password"onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </dev><br/><br/>
                <input type="submit" value="LOGIN"/>
                <br/>
            </dev>
        </form>
    )
}

export default LoginPage;
