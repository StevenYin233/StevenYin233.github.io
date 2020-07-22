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
import Home_Chinese from './Home_Chinese';
import Booking_Chinese from "./Booking_Chinese"
export const food = () =>(
  <div class = "container">
    
    <div id = "xmh">
    <h3 >乔伊</h3>
    <img src ={Joey} alt = "photo" id = "photo"  style={{ alignSelf: 'center' }}></img>
    <h5 className = " blue-text">名字: Joey</h5>
    <h5 className = " blue-text">地址: 50 rideau Street North</h5>
    <h5 className = " blue-text">电话: 656-878-0322</h5>
    <h5 className = " blue-text">人均: 28-50 </h5><br />

    
    <h3>招牌菜</h3>
    <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src={rice} id = "photo6"></img>
          <span class="card-title" id="card_color">龙虾炒饭</span>
        </div>
        <div class="card-content">
          <h6> 这种炒饭包括美味的龙虾和培根，味道是烧烤</h6>
        </div>

      </div>
    </div>
  </div>







    <h3>评论</h3>
    <table>
      
        <thead>
          <tr>
              <th>顾客姓名</th>
              <th>评论</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>艾文先生</td>
            <td>值得一试</td>
 
          </tr>
          <tr>
            <td>艾伦先生</td>
            <td>我来这很多次了</td>
        
          </tr>
          <tr>
            <td>约纳森女士</td>
            <td>谢谢B.L.D让我知道了有这么一个餐厅</td>
      
          </tr>
        </tbody>
      </table>
      <br/>
      <br/>
    <NavLink to ="/Booking_Chinese" class="waves-effect waves-light btn" style = {{fontSize : 'x-large'}}>预定</NavLink><br/>
    <br/>
    <NavLink to ="/Home_Chinese" class="waves-effect waves-light btn" style={{fontSize:"x-large"}}>返回</NavLink><br/>
    <br/>
  </div>
  </div>
)
export default food;