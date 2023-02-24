import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

function UserLogin(){
    const [cookies, setCookie, removeCookie] = useCookies(['username']);
    const [userDetails, setUserDetails] = useState({UserName:'', Password:''});
    function handleUserName(e){
        setUserDetails({
            UserName: e.target.value,
            Password: userDetails.Password
        })
    }
    function handlePassword(e){
        setUserDetails({
            UserName: userDetails.UserName,
            Password: e.target.value
        })
    }
    function handleLogin(){
         setCookie("username",userDetails.UserName,{path:"/", expires:new Date("2023-02-13 20:22")});
         alert("Login Success...");
    }
    function handleSignout(){
        removeCookie("username");
        alert("Sign Out Succesfully...");
    }
    useEffect (()=>{
        if(cookies.username==undefined){
            alert("Please Login");
        }
    },[])
    return(
        <div className="container-fluid">
           <h2>User Login</h2>
           <dl>
            <dt>User Name</dt>
            <dd><input onChange={handleUserName} type="text"/></dd>
            <dt>Password</dt>
            <dd><input onChange={handlePassword} type="password"/></dd>
           </dl>
           <button onClick={handleLogin}>Login</button>
           <hr />
           <h3>Home</h3>
           Hello ! <button onClick={handleSignout} className="btn btn-link">Sign Out</button> {cookies.username}
        </div>
    );
}

export default UserLogin;