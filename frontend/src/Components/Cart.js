import './Cart.css';
import {Link} from 'react-router-dom';
import {FaTrash} from "react-icons/fa";



const Cart=() =>{
    return <div className="cart">
        <div className="image">
            <img src="" alt=""/>

        </div>

        <Link to={`/product/${2111}`} className="name">
            <p>Product1</p>
            </Link>
        <p className="price" >865 MAD</p>
        <select  className="select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <button className="delete">
           <FaTrash/>
        </button>
    </div>;
    
};

export default Cart;