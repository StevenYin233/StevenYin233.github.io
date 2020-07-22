import React from 'react'
import Joey from "./images/Joey.jpg";

import About from "./about";
import { useHistory } from "react-router-dom";
import "./Image.css"
import{Carousel} from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import Booking from"./Booking";
import duck from "./images/duck.jpg";
import rice from "./images/rice.jpg"
export const food = () =>(
  <div class = "container">
    
    <div id = "xmh">
    <h3 >Joey</h3>
    <img src ={Joey} alt = "photo" id = "photo"  style={{ alignSelf: 'center' }}></img>
    <h5 className = " blue-text">Name: Joey</h5>
    <h5 className = " blue-text">Address: 50 rideau Street North</h5>
    <h5 className = " blue-text">Tel: 656-878-0322</h5>
    <h5 className = " blue-text">Price Range: 28-50 per person</h5><br />

    
    <h3>Popular food</h3>
    <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src={rice} id = "photo6"></img>
          <span class="card-title" id="card_color">Lobster fried rice</span>
        </div>
        <div class="card-content">
          <h6> This fired rice includes delicious lobster and bacon, the flavor is BBQ</h6>
        </div>

      </div>
    </div>
  </div>







    <h3>Comments of Joey</h3>
    <table>
      
        <thead>
          <tr>
              <th>Customer Name</th>
              <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mr.Alvin</td>
            <td>Joey is a really good restaurant, you should have a try</td>
 
          </tr>
          <tr>
            <td>Mr.Alan</td>
            <td>I have been to there for five times!</td>
        
          </tr>
          <tr>
            <td>Mrs.Jonathan</td>
            <td>Thank B.L.D for letting me know this good restaurant</td>
      
          </tr>
        </tbody>
      </table>
      <br/>
      <br/>
    <NavLink to ="/Booking" class="waves-effect waves-light btn" style = {{fontSize : 'x-large'}}>Book Reservation</NavLink><br/>
    <br/>
    <NavLink to ="/Home" class="waves-effect waves-light btn" style={{fontSize:"x-large"}}>Back</NavLink><br/>
    <br/>
  </div>
  </div>
)
export default food;