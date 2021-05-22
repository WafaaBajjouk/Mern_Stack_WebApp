import './Navbar.css';
import { Link } from "react-router-dom";
import { FaHome ,FaStore,FaShoppingBasket,FaRegUser} from "react-icons/fa";


const Navbar = ({click})=>{
    return (
    <nav className="navbar">
        <div className="logo">
          <h2>UpgradeShop</h2>
        </div>

        <ul className="navbar_links">
        <li>
                 <Link to="/Acceille"><FaHome/>Acceille
             </Link>
             </li>
             <li>
                 <Link to="/"><FaStore/>Boutique
             </Link>
             </li>

             <li><Link to="/cart"><FaShoppingBasket/>
                <span>Panier
                <span className="count">0</span></span>
          </Link>
             </li>

             <li><Link to="/login" className="login"><FaRegUser/>Se connecter
             <span></span></Link>
             </li>

                
            </ul>
            <div className="hamburgerMenu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            </nav>
       );

};
export default Navbar;