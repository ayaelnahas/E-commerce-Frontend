import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Userform from './components/user/UserForm/userForm';
import Products from './components/product/Products/products'
import Productform from './components/product/ProductForm/productForm'
import Auth from './components/Auth/authForm'
import MyProducts from './components/product/MyProducts/myProducts'
import logout from './components/Auth/logout'
import './App.css';



class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <h1 className="title">E-commerce App</h1>
          <ul className="ulDesign">
            <li><NavLink to='/Registration'>Registration</NavLink></li>
            <li><NavLink to='/AddProduct'>Add Product</NavLink></li>
            <li><NavLink to='/ProductsList'>Products List</NavLink></li>
            <li><NavLink to='/MyProducts'>My Products</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/logout'>Logout</NavLink></li>
          </ul>
          <Switch>
            <Route path="/Registration" component={Userform}></Route>
            <Route path="/AddProduct" component={Productform}></Route>
            <Route path="/ProductsList" component={Products}></Route>
            <Route path="/MyProducts" component={MyProducts}></Route>
            <Route path="/login" component={Auth}></Route>
            <Route path="/logout" component={logout}></Route>
          </Switch>
        </div>
      </BrowserRouter >
    )
  }
}


export default App



