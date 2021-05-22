// import product from '../../../backend/models/product';
import './HomeScreen.css';
import Pro from './../Components/Pro';

 
const HomeScreen = () =>{
    return <div className="homescreen">
          <h6 className="rise-text">Les derniers produits</h6>
          {/* <h1 className="title"> titre</h1> */}
        <div className="products">
            <Pro/>
            <Pro/>
            <Pro/>
            <Pro/>
            <Pro/>
            <Pro/>
            <Pro/>





        </div>
        
        </div>;


};

export default HomeScreen;