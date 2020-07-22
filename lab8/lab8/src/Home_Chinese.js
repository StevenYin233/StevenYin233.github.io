import React from 'react'
import Home from './Home'
import background from './images/background.jpg'
import "./Image.css"
import Booking_Chinese from "./Booking_Chinese"
import {
    FormControl,
    MenuItem,
    Select,
    IconButton,
    OutlinedInput,
    InputLabel,
    makeStyles
  } from "@material-ui/core";
  import { NavLink } from 'react-router-dom'
import { BrowserRouter as Router ,Switch,Route,Link } from "react-router-dom";
import information from './information.json';
import information_Chinese from './information_Chinese.json';
import logo from "./images/logo.jpg"
import About from "./about";
import Booking from "./Booking"
import App_Chinese from './App_Chinese'
import About_Chinese from "./about_Chinese";
import AfricanFood_C from "./AfricanFood_C"
export  class Home_Chinese extends React.Component{
    constructor(){
        super();
    
        this.state={
          search:null
        };
    }
    searchSpace=(event)=>{
        let keyword = event.target.value;
        this.setState({search:keyword})
    }

    render(){
        const styleInfo = {
            paddingRight:'10px'
          }
          const elementStyle ={
            border:'solid',
            borderRadius:'10px',
            position:'relative',
      
            height:'3vh',
            width:'20vh',
            marginTop:'5vh',
            marginBottom:'5vh'
          }

    const items = information_Chinese.filter((data)=>{
            if(this.state.search == null)
                return data
            else if(data.name.toLowerCase().includes(this.state.search.toLowerCase())){
                return data
            }
          }).map(data=>{
        return(
            <div >
 
            <ul>
              <li style={{position:'relative'}} class = "h3">
               <Link to = {data.link} ><span style={styleInfo}>{data.name}</span></Link>

              </li>
            </ul>
          </div>
          )
        })
    
        return (
        <div class = "container">
       
      
        
        <div id = "photo4">


            <h2 class = "green-text">欢迎来到B.L.D网站</h2>
            <br/>
            <h4 style={{textAlign:'center'}}>做出选择，享受美食g</h4>
            <NavLink to ="/About_Chinese" class="waves-effect waves-light btn" id = "new">我是新用户</NavLink>
            <NavLink to ="/Booking_Chinese" class="waves-effect waves-light btn" id = "new1">我想直接预定</NavLink>
            <br>
            </br>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <NavLink to ="/Home" class="waves-effect waves-light btn" id = "new3">English</NavLink>
            <br/>
            <br/>

            <NavLink to ='/' class="waves-effect waves-light btn" id = "new4">Chinese</NavLink>

        </div>
        <br/>
        <br/>
        <br/>
        <div class="row">

            <div class="col s3">
                <h4>什么是B.L.D</h4>
                <h6>B.L.D成立于2020年，B.L.D专注于给大众推荐美味的食物和好的餐厅 </h6>
                <br/>
                <br/>
                <h4>公司地址和联系方式</h4>
                <h6>地址: 876 clot street</h6>
                <h6>电话: 676-080-3333</h6>
            </div>

            <div class="col s9">
                <img src ={logo} alt = "photo" id = "photo5"  ></img>
            </div>

        </div>
 

   
        <br/>
        <h4>快捷查询</h4>
        <h5 style={{display:"inline"}}> Search: </h5><input type="text" placeholder="Enter item to be searched" style={elementStyle} onChange={(e)=>this.searchSpace(e)} />
        
        <i class="material-icons">search</i>
          {items}
        
         </div>
       )
        
      }
    }
    



export default Home_Chinese;