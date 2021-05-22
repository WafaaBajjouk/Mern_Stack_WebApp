import './SideBar.css';
import {Link} from 'react-router-dom';
import { FaHome ,FaShoppingBasket,FaRegUser} from "react-icons/fa";


const SideBar = ({show , click}) => {
    const sidebarClass= ["sidebar"];

    if(show){
        sidebarClass.push("show");
    }


    return <div className={sidebarClass.join(" ")}>
        <ul className="sidebar_links" onClick={click}>
        <li>
                 <Link to="/"><FaHome/>Acceille
             </Link>
             </li>

             <li><Link to="/cart"><FaShoppingBasket/>
                <span>Panier
                <span className="count">0</span></span>
          </Link>
             </li>

             <li><Link to="/login"><FaRegUser/>Se connecter
             <span></span></Link>
             </li>


        </ul>
    </div>;
};


export default SideBar;