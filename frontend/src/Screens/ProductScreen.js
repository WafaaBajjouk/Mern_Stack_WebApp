import './ProductScreen.css';

const ProductScreen = () =>{
    return (
        <div className="productscreen">
            <div className="pleft">
       <div className="image">
           <img src="http://images.unsplash.com/photo-1617868186608-87ae5c6f422c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" alt=""/>
      </div>

        <div className="left">
        <p className="name"> Play</p>
        <p className="price">865 MAD</p>
        <p className="desc">Desc..gbyugyguygygy. </p>
        </div>
       </div>

       <div className="right">
           <div className="rinfo">
               <p>Prix: <span>$789</span></p>
           <p>
               Qty
               <select>
                   <option value="1">1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>
                   <option value="4">4</option>
                   <option value="5">5</option>

               </select>
           </p>
           <p>
               <button type="button"> Ajouter au panier</button>
           </p>
           </div>
           

       </div>
        </div>
    )
}

export default ProductScreen;