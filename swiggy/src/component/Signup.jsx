import { useState } from 'react';
import { json, useNavigate } from 'react-router-dom';
import './styles.css'

function Signup() {

    const [userData, setuserData] = useState({Number:"", Name:"", Email:""});
    console.log(userData, "userData");

    const route = useNavigate();

    function Register(e){
        // alert("working");
        e.preventDefault();
        var DataFromLS = JSON.parse(localStorage.getItem("UserForReact")) || [];
        console.log(DataFromLS, "DataFromLS");

        var flag = false;

        for(var i=0; i<DataFromLS.length; i++){
            if(DataFromLS[i].Email === userData.Email){
                flag = true;
            }
        }
        if(flag){
            alert("Email is already present");
        }
        else if(userData.Number.length < 10 ){
            alert("Number is only 10 digit");
        }
        // else if(DataFromLS[i].Number === userData.Number){
        //     alert("Number is already register");
        // }
        else{
            DataFromLS.push(userData);
            localStorage.setItem("UserForReact", JSON.stringify(DataFromLS));
            setuserData({Number:"", Name:"", Email:""});
            alert("Signup Successfully");
        }
    }

    function UpdatingData(e){
        var name = e.target.name;
        var value = e.target.value;
        setuserData({...userData, [name]: value});
        // console.log(e.target.name,e.target.value);
    }

    return (
        <div id="signup-page">
            <div>X</div>
            <div>
                <div>
                    <h1>Sign Up</h1>
                    <p>Or Login to your account</p>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" alt="" />
                </div>
            </div>
            <div>
                <form onSubmit={(e) => Register(e)}>
                    <input onChange={UpdatingData} name="Number" value={userData.Number} type="number" placeholder='Phone Number' />
                    <br />
                    <input onChange={UpdatingData} name="Name" value={userData.Name} type="text" placeholder='Name' />
                    <br />
                    <input onChange={UpdatingData} name="Email" value={userData.Email} type="Email" placeholder='Email' />
                    <br />
                    <input style={{ backgroundColor: "rgb(252,128,25)", border: "none", outline: "none", width: "100%" }} type="submit" value="continue" />
                </form>
            </div>
            <div>
                <p>By creating an account, I accept the Terms & Conditions & Privacy Policy</p>
            </div>
        </div>
    )

}
export default Signup;