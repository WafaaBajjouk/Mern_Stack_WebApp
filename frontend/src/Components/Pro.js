import './Pro.css';
import {Link} from 'react-router-dom';
 
const Pro = () =>  {
    return (
        <div className="product">
        <img src="http://images.unsplash.com/photo-1617868186608-87ae5c6f422c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" alt=""/>

        <div className="info">
            <p className="name">Produit 1</p>
            <p className="desc">Description</p>
            <p className="price">765 MAD</p>

            <Link to={`/product/${2111}`} className="view">Voir</Link>
            </div>
        </div>
    )
}

export default Pro;