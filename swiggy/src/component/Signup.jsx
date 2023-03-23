import { useState } from "react";
import './styles.css'

function Signup(){

const [userData, setuserData] = useState({Name:"", Email: "", Number:""})
console.log(userData, "userData")

function handle(){

}

function updatingData(){

}



return(
    <div id='signup'>
             {/* <div onClick={data.onClose}>X</div> */}
            <div> 
                <div>
                    <h1>Sign Up</h1>
                    <p>or login to your account</p>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" alt="" />
                </div>
            </div>
            <form onSubmit={(e) => handle(e)}>
                <input onChange={updatingData} name="number" value={userData.number} type="number" placeholder='Phone Number' />
                <br />
                <input onChange={updatingData} name="name" value={userData.name} type="text" placeholder='Name' />
                <br />
                <input onChange={updatingData} name="email" value={userData.email} type="Email" placeholder='Email' />
                <br />
                <input style={{backgroundColor: "rgb(252,128,25)", border:"none", outline:"none", width:"89%"}} type="submit" value="continue" />
            </form>
            <div>
                <p>By creating an account, I accept the Terms & Conditions & Privacy Policy</p>
            </div>
        </div>
)

}
export default Signup;