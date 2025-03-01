import React from "react";
import "./Login.css";
const Login = () => {
    var users=[
        {username:"Sharmi",password:2006,cart:[]},
        {username:"Suguna",password:2007,cart:[]},
        {username:"Sri",password:2008,cart:[]},
 ];
 //const clickLogin = () => {
   // var getName=document.getElementById("username").value
    //var getPassword=document.getElementById("password").value
    //var currentuser=users.filter((data) => {
      //  return getName==data.getuserName;
    //});
    //console.log(currentUser);
    //if(currentuser.length>0){
      //  if(currentuser[0].getuserPassword=password){
        //    localStorage.setItem("getuserName",currentuser[0].getuserName)
        //}else{
          //  console.log("Invalid Password");
        //}
    //}
 //}
 function clickLogin(params){
    window.location.replace("/home");
 }
return (
    <div className="login">
      <h4>Login</h4>
      <div>
        <div className="text_area">
          <input
            type="text"
            id="username"
            name="username"
            defaultValue="username"
            className="text_input"
          />
        </div>
        <div className="text_area">
          <input
            type="password"
            id="password"
            name="password"
            defaultValue="password"
            className="text_input"
          />
        </div>
        <button onClick={clickLogin}
        className="btn">Login</button>
      </div>
     
    </div>
  );
};
export default Login
