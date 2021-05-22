import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import CartScreen from './Screens/CartScreen';
import ProductScreen from './Screens/ProductScreen';
import LoginScreen from './Screens/LoginScreen';
import {useState} from 'react';
// import { Footer } from './Screens/FooterScreen'

import Acceille from './Screens/Acceille';

import Navbar from './Components/Navbar';
import Backdrop from './Components/Backdrop';
import SideBar from './Components/SideBar';

import { checkServerIdentity } from 'tls';


function App() {


  const [sideToggle , setSideToggle]= useState(false);
  return ( <Router>
    <Navbar click={()=> setSideToggle(true)}/>
    <SideBar show={sideToggle} click={() => setSideToggle(false)}/>
    <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>

{/* <div className="App">  */}
<main>
  <Switch>
  <Route exact path="/Acceille" component={Acceille}/>
    <Route exact path="/" component={HomeScreen}/>
    <Route exact path="/product/:id" component={ProductScreen} />
    <Route exact path="/cart" component={CartScreen}/>
    <Route exact path="/login" component={LoginScreen}/>



  </Switch>
</main>

{/* <Footer /> */}

{/* </div> */}
</Router>
  );
}

export default App;
