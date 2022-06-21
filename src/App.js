import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Consulting from "./pages/Consulting";
import Contactus from "./pages/Contactus";
import Design from "./pages/Design";
import Development from "./pages/Development";
import Marketing from "./pages/Marketing";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Signin from "./pages/Signin";
import Login from './Login';
import Register from './Register';
import Users from "./components/Users";
import Update from './Update';
import Reg from './Reg';
import Add from './Add';
import Password from './Password';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/contactus" component={Contactus}></Route>
          <Route path="/products" component={Products}></Route>
          <Route path="/services" component={Services}></Route>
          <Route path="/signin" component={Signin}></Route>
          <Route path="/marketing" component={Marketing}></Route>
          <Route path="/development" component={Development}></Route>
          <Route path="/design" component={Design}></Route>
          <Route path="/consulting" component={Consulting}></Route>
          <Route path="/Password" component={Password}/>
             <Route path="/Login" component={Login}/>
             <Route path="/Register" component={Register}/>
             <Route path =  "/Users"  component = { Users }/>
              <Route path =  "/Update"  component = { Update }/>
                <Route path =  "/Reg"  component = { Reg }/>
                  <Route path =  "/Add"  component = { Add }/>

        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
