import { useEffect, useState } from 'react';
import './styles.css'

function Addproduct() {

    const [Product, setProduct] = useState();
    console.log(Product, "Product")

    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
            .then(res => res.json())
            .then(json => setProduct(json.drinks))
    }, [])

    function AddToCart(e){
        
        console.log(e);
        // alert("working");

        var DataFromLS = JSON.parse(localStorage.getItem("UserForReact"));
        console.log(DataFromLS, "DataFromLS");

        var currentuser = JSON.parse(localStorage.getItem("current-user"));
        console.log(currentuser, "currentuser");

         var Alluser = []; 

        if(currentuser){
            for(var i=0; i < DataFromLS.length; i++){
                if(DataFromLS[i].Email === currentuser["current-user-email"]){
                  var newObj = DataFromLS[i];
                  newObj["Cartproduct"] = ["Cartproduct"] || [];
                  newObj["Cartproduct"].push(e);
                  Alluser.push(newObj);
                }
                else{
                    Alluser.push(DataFromLS[i]);
                }
            }
            localStorage.setItem("UserForReact", JSON.stringify(Alluser));
            alert("Product added into the cart")
        }
        else{
            alert("login first");
        }

    }

    return (
        <div id="addproduct-fullpage">
            <div id='addproduct-navbar'>
                <div id='addproduct-nav'>
                    <div>
                        <div>
                            <img src="data:image/png;base64,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" alt="" />
                        </div>
                        <div>
                            <p>Malad West, Malad, Malad west, Mumbai</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <div>
                                <input type="text" placeholder='Search' />
                            </div>
                        </div>
                        <div>
                            <div>
                                <i class="fa-solid fa-percent"></i>
                            </div>
                            <div>
                                <input type="text" placeholder='Offers' />
                            </div>
                        </div>
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
                        <div>
                            <div>
                                <i class="fa-solid fa-cart-shopping"></i>
                            </div>
                            <div>
                                <input type="text" placeholder='Cart' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='addproduct-gallery'>
                <div>
                    <div>
                        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep" alt="" />
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/awurei8ypqkafoqay9ym" alt="" />
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t" alt="" />
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3" alt="" />
                    </div>
                </div>
            </div>
            <div id='Product'>
                <div id='ProductData'>
                    {Product && Product.map((e, i) => (
                        <div key="i">
                            <img src={e.strDrinkThumb} alt="" />
                            <p>{e.strDrink}</p>
                            <p>Price Rs.250</p>
                            <button onClick={() => AddToCart(e)}>Add To Cart</button>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )

}
export default Addproduct;