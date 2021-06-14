import React,{useState} from 'react'
import "./Login.css";
import logo from "./amazon2.svg"; 
import {Link, useHistory } from "react-router-dom";
import {db,auth} from "./firebase";
const Login=()=> {
    const history=useHistory(); 
    const [email,setemail]=useState();
    const [password,setpassword]=useState();
    const signin=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push("/")
        })
        .catch((err)=>{
            console.log(err.message);
        })
    }
    const register=(e)=>{
           e.preventDefault();
           auth.createUserWithEmailAndPassword(email,password)
           .then((auth)=>{
               console.log(auth);
               if(auth){
                   history.push("/")
               }
           })
           .catch((err)=>{
               alert(err.message)
           })
    }
    return (
        <div className="login">
            <Link to="/">
            <img  className="login_img" src={logo}/>
       </Link>
        <div  className="login_container">
            <h1>Sign In</h1>
            <form className="form">
                <h5 className="email">Email</h5>
                <input  className="text"  value={email} type="text" onChange={(event)=>{
                    setemail(event.target.value);
                }} />
                <h5 className="password">Password</h5>
                <input type="password" className="text1" value={password} onChange={(event)=>{
                    setpassword(event.target.value);
                }} />

               <button type="submit" className="login_signin_button" onClick={signin} >Sign In</button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale.Please see our Privacy Notice,Our cookies Notice and our Interest-Based Ads Only  
                    </p>
                <button className="login_register_button" onClick={register}>Create your Amazon Account</button>

            </div>
        </div>
    )
}

export default Login;