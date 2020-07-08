import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import Category from "./Category";
import Products from "./Products/products";
import Product from "./Products/product"
import Admin from "./Login"
import {BrowserRouter as Router , Switch, Route, Link } from 'react-router-dom'


function App() {
  return (
    <Router>
    <div className="App">
        <ul>
          <Link to="/Home">
          <li>Home</li>
          </Link>

          <Link to="/Category">
          <li>Category</li>
          </Link>

          <Link to="/Products">
          <li>Products</li>
          </Link>
          
          <Link to="/Login">
          <li>Admin</li>
          </Link>
        </ul>

      <Switch>
        <Route path='/Home'component={Home}/>
        <Route path='/Category'component={Category}/>
        <Route path='/Products'component={Products}/>
        <Route path='/Login'component={Admin}/>
      </Switch>
      
     
    </div>
    </Router>
  );
}

export default App;
// const PrivateRoute =({component:Component,authed,...rest})=>{
//   return(
//     <Route
//     {...rest}
//     render={(props)=>authed===true
//       ?<component{...props}/>
//       :<Redirect to={{pathname:'/login',state:{from:props.location}}}/>
//     }
  
// }
