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
import Home_Chinese from './Home_Chinese';
import Booking_Chinese from "./Booking_Chinese"
export const AfricanFood_C = () =>(
  <div class = "container">
    
    <div id="xmh">
    <h3 >江布</h3>
    <img src ={African} alt = "photo" id = "photo"  style={{ alignSelf: 'center' }}></img>
    <h5 className = " blue-text">名字：江布</h5>
    <h5 className = " blue-text">地址: 69 Kempster Ave</h5>
    <h5 className = " blue-text">电话: 656-999-0332</h5>
    <h5 className = " blue-text">人均: 25-50</h5><br />
    <h4>招牌菜</h4>
      <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src={shrimp} id = "photo6"></img>
          <span class="card-title" id="card_color">炸虾</span>
        </div>
        <div class="card-content">
          <h6>  炸虾焗饭 </h6>
        </div>

      </div>
    </div>
    <h4>顾客评论</h4>
    <table>
      
        <thead>
          <tr>
              <th>顾客姓名</th>
              <th>评论</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>李先生</td>
            <td>好的服务</td>
 
          </tr>
          <tr>
            <td>李维斯先生</td>
            <td>能外带真是太好了</td>
        
          </tr>
          <tr>
            <td>克里斯汀娜女生</td>
            <td>很多选择而且环境安逸</td>
      
          </tr>
        </tbody>
      </table>
      <br/>
      <br/>
    
    <NavLink to ="/Booking_Chinese" class="waves-effect waves-light btn" style={{fontSize:"x-large"}}>预定</NavLink><br/>
    <br/>
    <NavLink to ="/Home_Chinese" class="waves-effect waves-light btn" style={{fontSize:"x-large"}}>返回</NavLink><br/>
    <br/>
    </div>
  </div>
)
export default AfricanFood_C;