import { useState } from 'react';
import { json } from 'react-router-dom';
import './styles.css';


function Login(){

   const[loginData, setloginData] = useState({Email:""});
   console.log(loginData, "loginData")

   function login(e){
    e.preventDefault();
    // alert("working")

    var DataFromLS = JSON.parse(localStorage.getItem("UserForReact"));
    console.log(DataFromLS, "DataFromLS");
    
    var flag = false;

    for(var i=0; i < DataFromLS.length; i++){
        if(DataFromLS[i].Email === loginData.Email){
            flag = true;
        }
    }
    // console.log(flag, "heree");
    if(flag){
        setloginData({Email:""}); 
        var user ={}
        user["current-user-email"] = loginData.Email;
        localStorage.setItem("current-user", JSON.stringify(user));
        alert("Login Successfully")
    }
    else{
        alert("Please check your email")
    }
   }

   function UpdatingData(e){
       var name = e.target.name;
       var value = e.target.value;
       setloginData({...loginData, [name]: value});
    // console.log(e.target.name,e.target.value);
   }

  return(
<div id="login-page">
            <div>X</div>
            <div>
                <div>
                    <h1>Login</h1>
                    <p>Create your account</p>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" alt="" />
                </div>
            </div>
            <div>
                <form onSubmit={(e) => login(e)}>
                    <input onChange={UpdatingData} name="Email" value={loginData.Email} type="Email" placeholder='Email' />
                    <br />
                    <input style={{ backgroundColor: "rgb(252,128,25)", border: "none", outline: "none", width: "100%" }} type="submit" value="Login" />
                </form>
            </div>
            <div>
                <p>By creating an account, I accept the Terms & Conditions & Privacy Policy</p>
            </div>
        </div>
  )
}
export default Login;