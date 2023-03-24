import './styles.css'
import Signup from './Signup'
import Login from './Login'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Index() {

    const [displaysignup, setdisplaysignup] = useState("false");
    console.log(displaysignup, "displaysignup");

    const [displaylogin, setdisplaylogin] = useState("false");
    console.log(displaylogin, "displaylogin");

    const [currentuser, setcurrentuser] = useState(false);
    console.log(currentuser, "currentuser");

    useEffect(() => {
        var currentuserFromLS = JSON.parse(localStorage.getItem("current-user"));
        if (currentuserFromLS) {
            setcurrentuser(true);
        }
    }, [])

    function logout() {
        localStorage.removeItem("current-user");
        alert("logout successfully")
    }

    const route = useNavigate();

    function findfood() {
        route('/Addtheproduct');
    }

    function signup() {
        setdisplaysignup(true);
    }

    function login() {
        setdisplaylogin(true);
    }


    return (
        <div id="full-page">
            <div id='nav'>
                <div id='nav-left'>
                    <div id='nav-left-content'>
                        <div>
                            <div>
                                <img src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Symbol.png" alt="" />
                            </div>
                            <div>
                                <div>
                                    {!currentuser && <button onClick={() => login()}>login</button>}
                                </div>
                                <div>
                                    {!currentuser && <button onClick={() => signup()}>Signup</button>}
                                </div>
                                <div>
                                {currentuser && <button onClick={() => logout()}>Logout</button>}
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1>Game Night ?</h1>
                            <p>Order food from favourite restaurant near you.</p>
                        </div>
                        <div>
                            <div>
                                <input type="text" placeholder='Enter Your delivery Location' />
                            </div>
                            <div>
                                <button onClick={() => findfood()}>Find Food</button>
                            </div>
                        </div>
                        <div>
                            <p>POPULAR CITIES IN INDIA</p>
                            <p>Ahmedabad Bangalore Chennai Delhi Gurgaon Hyderabad Kolkata Mumbai Pune& more.</p>
                        </div>
                    </div>
                </div>
                <div id='nav-right'>
                    <div>
                        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq" alt="" />
                    </div>
                </div>
            </div>
            <div id='content'>
                <div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf" alt="" />
                        </div>
                        <div>
                            <h3>No Minimum order</h3>
                            <p>Order in for yourself or for the group, with no restrictions on order value</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy" alt="" />
                        </div>
                        <div>
                            <h3>Live Order Tracking</h3>
                            <p>Know where your order is at all times, from the restaurant to your doorstep</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn" alt="" />
                        </div>
                        <div>
                            <h3>Lightning-Fast Delivery</h3>
                            <p>Experience Swiggy's superfast delivery for food delivered fresh & on time</p>
                        </div>
                    </div>
                    {<Signup />}
                    {<Login />}
                </div>
            </div>


        </div >
    )

}
export default Index;