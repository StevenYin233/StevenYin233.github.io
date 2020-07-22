import React from 'react';
import { render } from 'react-dom'
import XinMeiHua from "./images/XinMeiHua.png";
import { BrowserRouter as Router ,Switch,Route,Link } from "react-router-dom";
import LocalFood from "./LocalFood";
import African from "./images/African.jpg"
import About from "./about";
import Booking from "./Booking"
import Home from "./Home"
import food from "./food"
import AfricanFood from "./AfricanFood"
import Booking_Chinese from "./Booking_Chinese"
import { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import logo from "./images/logo.jpg"
import Home_Chinese from './Home_Chinese';
import About_Chinese from "./about_Chinese";
import AfricanFood_C from "./AfricanFood_C.js"
import LocalFood_C from "./LocalFood_C";
import food_C from "./food_C"
    
function App() {
    return (
    <Router>
     <div className="App">
      <nav>
        <div class="nav-wrapper">
        <img src ={logo} class="brand-logo" alt = "photo" id = "photo2"  ></img>                    
          <a href="#" class="brand-logo center">B.L.D</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li ><Link to = "/Home">Home</Link></li>
            <li ><Link to ="/about">About B.L.D</Link></li>
            <li><Link to = "/Booking">Booking</Link></li>
            <li><Link to ="/food">Local Food</Link></li>
            <li><Link to = "/LocalFood">Asian Food</Link></li>
            <li><Link to = "/AfricanFood">African Food</Link></li>
            
          </ul>
        </div>
      </nav>
    
      <Switch>
      <Route path = "/AfricanFood" component ={AfricanFood} />
      <Route path = "/AfricanFood_C" component ={AfricanFood_C} />
      <Route path = "/food" component ={food} />
      <Route path = "/food_C" component ={food_C} />
        <Route path = "/Home" component ={Home} />
        <Route path = "/Booking" component ={Booking} />
        <Route path = "/LocalFood" component={LocalFood}/>
        <Route path = "/LocalFood_C" component={LocalFood_C}/>
        <Route path="/about" component={About} />
        <Route path="/Home_Chinese" component={Home_Chinese} />
        <Route path="/Booking_Chinese" component={Booking_Chinese} />
        <Route path="/about_Chinese" component={About_Chinese} />
      </Switch>
      <div class = "container">
      <div class="carousel">
   
 
  </div>
      </div>

      
    </div>
    </Router>
    


    ); 
    
}

export default App;

