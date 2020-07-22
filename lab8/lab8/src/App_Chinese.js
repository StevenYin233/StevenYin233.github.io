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

import { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import logo from "./images/logo.jpg"



    
function App_Chinese() {
    return (
    <Router>
     <div className="App">
      <nav>
        <div class="nav-wrapper">
        <img src ={logo} class="brand-logo" alt = "photo" id = "photo2"  ></img>                    
          <a href="#" class="brand-logo center">B.L.D</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li ><Link to = "/">主页</Link></li>
            <li ><Link to ="/">关于B.L.D</Link></li>
            <li><Link to = "/">预定</Link></li>
            <li><Link to ="/">当地美食</Link></li>
            <li><Link to = "/">亚洲美食</Link></li>
            <li><Link to = "/">非洲美食</Link></li>
          </ul>
        </div>
      </nav>
    
      <Switch>
      <Route path = "/" component ={AfricanFood} />
      <Route path = "/" component ={food} />
        <Route path = "/" component ={Home} />
        <Route path = "/" component ={Booking} />
        <Route path = "/" component={LocalFood}/>
        <Route path="/" component={About} />
    
      </Switch>
      <div class = "container">
      <div class="carousel">
 
 
  </div>
      </div>

      
    </div>
    </Router>
    


    ); 
    
}

export default App_Chinese;