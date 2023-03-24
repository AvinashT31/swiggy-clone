 import { useEffect, useState } from 'react';
import './styles.css'

function Cart() {

    const [cartData, setcartData] = useState("");
    console.log(cartData, "cartData");

    const [currentuser, setcurrentuser] = useState("false");
    console.log(currentuser, "currentuser");

    useEffect(() => {
        var currentuser = JSON.parse(localStorage.getItem("current-user"));
        console.log(currentuser, "currentuser")

        var DataFromLS = JSON.parse(localStorage.getItem("UserForReact"));
        console.log(DataFromLS, "DataFromLS");

        if (currentuser) {
            for (var i = 0; DataFromLS[i].length; i++) {
                if (DataFromLS[i].Email === currentuser && DataFromLS[i].Cartproduct) {
                    setcurrentuser(true);
                    setcartData(DataFromLS[i].cartData)
                }
            }
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

                    </div>
                </div>
                <div id='cart-info'>
                    {cartData && cartData.map((e, i) => (
                        <div key={i}>
                            <div>
                                <img src={e.strDrinkThumb} alt="product" />
                            </div>
                            <div>
                                <h3>{e.strDrink}</h3>
                                <p>Malad West</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )

}
export default Cart;
