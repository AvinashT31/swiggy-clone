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

        <div id="Cart-fullpage">
            <div id='cart-navbar'>
                <div id='cart-nav'>
                    <div>
                        <div>
                            <img src="https://logosandtypes.com/wp-content/uploads/2021/01/swiggy.svg" alt="" />
                        </div>
                        <div>
                            <p>SECURE ACCOUNT</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <i class="fa-brands fa-hire-a-helper"></i>
                            </div>
                            <div>
                                <input type="text" placeholder='Help' />
                            </div>
                        </div>
                        <div>
                            <div>
                                <i class="fa-regular fa-user"></i>
                            </div>
                            <div>
                                <input type="text" placeholder='Sign In' />
                            </div>
                        </div>
                    </div>
                </div>
                {currentuser ? <div id='cart-info'>
                    <div id='cart-info-content'>
                        <div>
                            {Cartproduct && Cartproduct.map((e, i) => (
                                <div key="i">
                                    <img src={e.strDrinkThumb} alt="" />
                                    <h3>{e.strDrink}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> :
                 <div id='cart-second'>
                    <div id='cart-second-content'>
                        <div>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="" />
                        </div>
                        <h4>Your cart is empty</h4>
                        <p>You can go to home page to view more restaurants</p>
                        <button>SEE REASTAURANTS NEAR YOU</button>
                    </div>
                </div>}
            </div>

        </div>
    )

}
export default Cart;
