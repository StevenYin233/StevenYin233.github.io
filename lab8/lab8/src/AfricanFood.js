import React from 'react'
import Joey from "./images/Joey.jpg";
import African from "./images/African.jpg"
import About from "./about";
import { useHistory } from "react-router-dom";
import "./Image.css"
import{Carousel} from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import Booking from"./Booking";
import shrimp from "./images/shrimp.jpg"
import Home from "./Home"
export const AfricanFood = () =>(
  <div class = "container">
    
    <div id="xmh">
    <h3 >Jumboo</h3>
    <img src ={African} alt = "photo" id = "photo"  style={{ alignSelf: 'center' }}></img>
    <h5 className = " blue-text">Name: Jumboo</h5>
    <h5 className = " blue-text">Address: 69 Kempster Ave</h5>
    <h5 className = " blue-text">Tel: 656-999-0332</h5>
    <h5 className = " blue-text">Price Range: 25-50 per person</h5><br />
    <h4>Famous Food</h4>
      <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src={shrimp} id = "photo6"></img>
          <span class="card-title" id="card_color">Fried shrimp</span>
        </div>
        <div class="card-content">
          <h6>  coconut shrimp and garlic butter shrimp, with rice, the source makes shrimp more delicious </h6>
        </div>

      </div>
    </div>
    <h4>Comments of Jumboo</h4>
    <table>
      
        <thead>
          <tr>
              <th>Customer Name</th>
              <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mr.Lee</td>
            <td>good service</td>
 
          </tr>
          <tr>
            <td>Mr.Levis</td>
            <td>Takeout is wonderful</td>
        
          </tr>
          <tr>
            <td>Mrs.Christina</td>
            <td>Many choices,pleasant place</td>
      
          </tr>
        </tbody>
      </table>
      <br/>
      <br/>
    
    <NavLink to ="/Booking" class="waves-effect waves-light btn" style={{fontSize:"x-large"}}>Book Reservation</NavLink><br/>
    <br/>
    <NavLink to ="/Home" class="waves-effect waves-light btn" style={{fontSize:"x-large"}}>Back</NavLink><br/>
    <br/>
    </div>
  </div>
)
export default AfricanFood;