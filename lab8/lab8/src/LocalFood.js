import React from 'react'
import XinMeiHua from "./images/XinMeiHua.png";
import XiaoYuanLou from "./images/XiaoYuanLou.jpg"
import About from "./about";
import { useHistory } from "react-router-dom";
import soup from "./images/soup.jpg"
import "./Image.css"
import duck from "./images/duck.jpg";
import{Carousel} from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import Booking from"./Booking";
export const LocalFood = () =>(
  <div class = "container">
    <div id = "xmh">
    <h3 >XinMeiHua</h3>
    <img src ={XinMeiHua} alt = "photo" id = "photo"  style={{ alignSelf: 'center' }}></img>
    <h5 className = " blue-text">Name: XinMeiHua</h5>
    <h5 className = " blue-text">Address: 76 Clot Street North</h5>
    <h5 className = " blue-text">Tel: 656-878-0987</h5>
    <h5 className = " blue-text">Price Range: 20-50 per person</h5><br />
    <h4>Famous Food</h4>
    <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src={duck} id = "photo6"></img>
          <span class="card-title" id="card_color">Peking duck</span>
        </div>
        <div class="card-content">
          <h6> very popular in China.  The meat is characterized by its thin, crisp skin, with authentic versions of the dish serving mostly the skin and little meat, sliced in front of the diners by the cook. </h6>
        </div>

      </div>
    </div>
  </div>
  <h4>Comments of XinMeiHua</h4>
    <table>
      
        <thead>
          <tr>
              <th>Customer Name</th>
              <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mr.Jack</td>
            <td>Overall is good</td>
 
          </tr>
          <tr>
            <td>Mr.Andy</td>
            <td>If you are student, you can have the student discount!</td>
        
          </tr>
          <tr>
            <td>Mrs.Helen</td>
            <td>I love this restaurant!</td>
      
          </tr>
        </tbody>
      </table>
      <br/>
      <br/>

    <NavLink to ="/Booking" class="waves-effect waves-light btn" style = {{fontSize:'x-large'}}>Book Reservation</NavLink><br/>
    <br/>
    <NavLink to ="/Home" class="waves-effect waves-light btn" style={{fontSize:"x-large"}}>Back</NavLink><br/>
    </div>

    <br/>
    <br/>
    <div id="xmh">
      <h3 >XiaoYuanLou</h3>
      <img src = {XiaoYuanLou} alt = "photo" id = "photo"  style={{ alignSelf: 'center' }}></img>
      <h5 className = " blue-text">Name: XiaoYuanLou</h5>
      <h5 className = " blue-text">Address: 76 Clot Street North</h5>
      <h5 className = " blue-text">Tel: 656-878-0987</h5>
      <h5 className = " blue-text">Price Range: 20-50 per person</h5><br />
      <h4>Famous Food</h4>
      <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src={soup} id = "photo6"></img>
          <span class="card-title" id="card_color">JiuNiang</span>
        </div>
        <div class="card-content">
          <h6>  a sweet, soup- or pudding-like dish in Chinese cuisine. It also known as sweet wine or sweet rice wine. </h6>
        </div>

      </div>
    </div>
    <h4>Comments of XinMeiHua</h4>
    <table>
      
        <thead>
          <tr>
              <th>Customer Name</th>
              <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mr.Robinson</td>
            <td>so good!</td>
 
          </tr>
          <tr>
            <td>Mr.Harry</td>
            <td>good experience</td>
        
          </tr>
          <tr>
            <td>Mrs.Christina</td>
            <td>I like JiuNiang in this restaurant</td>
      
          </tr>
        </tbody>
      </table>
      <br/>
      <br/>
    
      <NavLink to ="/Booking" class="waves-effect waves-light btn" style = {{fontSize:'x-large'}}>Book Reservation</NavLink><br/>
      <br/>
    <NavLink to ="/Home" class="waves-effect waves-light btn" style={{fontSize:"x-large"}}>Back</NavLink><br/>
    </div> 
  </div>
)
export default LocalFood;