import { useEffect, useState } from 'react';
import './styles.css'

function Cart() {

    const [Cartproduct, setCartproduct] = useState();
    console.log(Cartproduct, "Cartproduct");

    const [currentuser, setcurrentuser] = useState(false);
    console.log(currentuser, "currentuser");

    useEffect(() => {
        var currentuser = JSON.parse(localStorage.getItem("current-user"));
        console.log(currentuser, "currentuser")

        var DataFromLS = JSON.parse(localStorage.getItem("UserForReact"));
        console.log(DataFromLS, "DataFromLS");

        //    var flag =false;

        for (var i = 0; i < DataFromLS.length; i++) {
            if (DataFromLS[i].Email === currentuser['current-user-email'] && DataFromLS[i].Cartproduct) {
                // flag = true;
                setcurrentuser(true);
                setCartproduct(DataFromLS[i].Cartproduct);
            }
            // else{
            //     setcurrentuser(false);
            // }
        }

    }, [])




    return (
<div id="cart">
            <div>
                <div className="navbar">
                    <div className="navbar-l adjust-width-l">
                        <div>
                            <img
                                src="https://logosandtypes.com/wp-content/uploads/2021/01/swiggy.svg"
                                alt="logo"
                            />
                        </div>
                        <div>
                            <p>
                                <strong>SECURE CHECKOUT </strong>
                            </p>
                        </div>
                    </div>

                    <div className="navbar-r adjust-width-r">
                        <div>
                            <i className="fa-regular fa-circle-question"></i>
                            <p>Help</p>
                        </div>
                        <div>
                            <i className="fa-regular fa-user"></i>
                            <p>Log in </p>
                        </div>
                    </div>
                </div>
            </div>

            {currentuser ? (
                <div className="cart-order">
                    <div>
                        <div className="cart-order-l">
                            <div>
                                <div className="cart-order-l-userInfo">
                                    <i className="fa-solid fa-user"></i>
                                    <p>Logged in</p>
                                    <i className="fa-solid fa-circle-check"></i>
                                </div>
                                <div className="cart-order-l-user-details">
                                    {/* <p>{userName}</p> */}
                                </div>
                            </div>

                            <div>
                                <div className="cart-order-l-address-top">
                                    <h3>Add a delivery address</h3>
                                    <p>You seem to be in the new location</p>
                                </div>
                                <div className="cart-order-l-address-bot">
                                    <div>
                                        <div>
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                        <div>
                                            <h3>Add New Address</h3>
                                            <p>Malad, Malad West, Mumbai, Maharashtra, India</p>
                                        </div>
                                    </div>
                                    <button>ADD NEW</button>
                                </div>
                            </div>
                            <div>
                                <div className="cart-order-l-payment">
                                    <i className="fa-regular fa-credit-card"></i>
                                    <h3>Payment</h3>
                                </div>
                            </div>
                        </div>
                        <div className="cart-order-r">
                            <div className="display-order">
                                {Cartproduct &&
                                    Cartproduct.map((e, i) => (
                                        <div key={i}>
                                            <div>
                                                {" "}
                                                <img src={e.strDrinkThumb} alt="product" />
                                            </div>
                                            <div>
                                                <h3>{e.strDrink}</h3>
                                                <p>Malad West</p>
                                            </div>
                                            {/* <div id="reducer"><button onClick={handleButtonClick}>+</button><h6>Quantity{state.age}</h6><button onClick={handleButtonClickForDec}>-</button></div> */}
                                        </div>            
                                    ))}

                            </div>
                            <div className="apply-coupon">
                                <i className="fa-solid fa-rug"></i>
                                <p>Apply Coupon</p>
                            </div>
                            <div className="bill">
                                <div className="bill-details">
                                    <h4>Bill Details</h4>
                                    <div>
                                        <div>
                                            <p>Item Total</p>
                                            <p>₹ 649</p>
                                        </div>
                                        <div>
                                            <p>Delivery Fee | 0.1 kms</p>
                                            <p>₹ 37</p>
                                        </div>
                                        <div>
                                            <p>Govt Taxes & Other Charges</p>
                                            <p>₹ 53.45</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pay-bill">
                                    <p>TO PAY</p>
                                    <p>₹ 739</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            ) : (
                <div className="cart-top">
                    <div>
                        <div>
                            <img
                                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
                                alt="kitchen"
                            />
                        </div>
                        <h3>Your cart is empty</h3>
                        <p>You can go to home page to view more restaurants</p>
                        <button>SEE RESTAURANTS NEAR YOU</button>
                    </div>
                </div>

            )}
        </div>
    )
}
export default Cart;


// {currentuser ? <div id='cart-info'>
//                     <div id='cart-info-content'>
//                         <div>
//                             {Cartproduct && Cartproduct.map((e, i) => (
//                                 <div id='carts' key="i">
//                                     <img src={e.strDrinkThumb} alt="" />
//                                     <h3>{e.strDrink}</h3>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div> :
//                  <div id='cart-second'>
//                     <div id='cart-second-content'>
//                         <div>
//                             <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="" />
//                         </div>
//                         <h4>Your cart is empty</h4>
//                         <p>You can go to home page to view more restaurants</p>
//                         <button>SEE REASTAURANTS NEAR YOU</button>
//                     </div>
//                 </div>}