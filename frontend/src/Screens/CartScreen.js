import './CartScreen.css';
import Cart from '../Components/Cart';

const CartScreen = () =>{
    return      <div className="cartscreen">
            <div className="left">
                <h2>Votre Panier</h2>
                <Cart/>
                <Cart/>
                <Cart/>
                <Cart/>


        
            </div>

        <div className="right">
            <div className="info">
                <p>Items</p>
                <p> 9876MAD </p>

            </div>
            <div>
                <button>
                    Valider
                </button>
            </div>

        </div>
        </div>;
    
};

export default CartScreen;