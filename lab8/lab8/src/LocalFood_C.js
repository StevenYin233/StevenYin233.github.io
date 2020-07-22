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
export const LocalFood_C = () =>(
  <div class = "container">
    <div id = "xmh">
    <h3 >新梅华</h3>
    <img src ={XinMeiHua} alt = "photo" id = "photo"  style={{ alignSelf: 'center' }}></img>
    <h5 className = " blue-text">名字：新梅华</h5>
    <h5 className = " blue-text">地址: 76 Clot Street North</h5>
    <h5 className = " blue-text">电话: 656-878-0987</h5>
    <h5 className = " blue-text">人均: 20-50</h5><br />
    <h4>招牌菜</h4>
    <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src={duck} id = "photo6"></img>
          <span class="card-title" id="card_color">北京烤鸭</span>
        </div>
        <div class="card-content">
          <h6> 在中国很受欢迎。鸭肉的特点是皮薄脆，正宗的鸭肉大多是皮和少量的肉，由厨师在食客面前切成薄片 </h6>
        </div>

      </div>
    </div>
  </div>
  <h4>评价</h4>
    <table>
      
        <thead>
          <tr>
              <th>顾客姓名</th>
              <th>评论</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>杰克先生</td>
            <td>总体来说还不错</td>
 
          </tr>
          <tr>
            <td>安迪先生</td>
            <td>如果你是学生你即可享受学生优惠</td>
        
          </tr>
          <tr>
            <td>海伦女士</td>
            <td>我太爱这所饭店了</td>
      
          </tr>
        </tbody>
      </table>
      <br/>
      <br/>

    <NavLink to ="/Booking_Chinese" class="waves-effect waves-light btn" style = {{fontSize:'x-large'}}>预定</NavLink><br/>
    <br/>
    <NavLink to ="/Home_Chinese" class="waves-effect waves-light btn" style={{fontSize:"x-large"}}>返回</NavLink><br/>
    </div>

    <br/>
    <br/>
    <div id="xmh">
      <h3 >小园楼</h3>
      <img src = {XiaoYuanLou} alt = "photo" id = "photo"  style={{ alignSelf: 'center' }}></img>
      <h5 className = " blue-text">名字：小园楼</h5>
      <h5 className = " blue-text">地址: 76 Clot Street North</h5>
      <h5 className = " blue-text">电话: 656-878-0987</h5>
      <h5 className = " blue-text">人均: 20-50</h5><br />
      <h4>招牌菜</h4>
      <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src={soup} id = "photo6"></img>
          <span class="card-title" id="card_color">酒酿圆子</span>
        </div>
        <div class="card-content">
          <h6>  汤菜一种甜的、汤或布丁状的中国菜它也被称为甜酒或甜米酒。 </h6>
        </div>

      </div>
    </div>
    <h4>评论</h4>
    <table>
      
        <thead>
          <tr>
              <th>顾客姓名</th>
              <th>评论</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>罗宾逊先生</td>
            <td>很棒</td>
 
          </tr>
          <tr>
            <td>哈利先生</td>
            <td>不错的经历</td>
        
          </tr>
          <tr>
            <td>克里斯汀娜女士</td>
            <td>我喜欢这里的酒酿</td>
      
          </tr>
        </tbody>
      </table>
      <br/>
      <br/>
    
      <NavLink to ="/Booking_Chinese" class="waves-effect waves-light btn" style = {{fontSize:'x-large'}}>预定</NavLink><br/>
      <br/>
    <NavLink to ="/Home_Chinese" class="waves-effect waves-light btn" style={{fontSize:"x-large"}}>返回</NavLink><br/>
    </div> 
  </div>
)
export default LocalFood_C;