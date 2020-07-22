import React from 'react'
import Home_Chinese from './Home_Chinese'
import background from './images/background.jpg'
import "./Image.css"
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
import logo from "./images/logo.jpg"
import About from "./about";
import Booking from "./Booking"
import App_Chinese from './App_Chinese'

export  class Home extends React.Component{
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

    const items = information.filter((data)=>{
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


            <h2 class = "green-text">Welcome to the B.L.D site</h2>
            <br/>
            <h4 style={{textAlign:'center'}}>Make choice,enjoy eating</h4>
            <NavLink to ="/About" class="waves-effect waves-light btn" id = "new">I am new to B.L.D</NavLink>
            <NavLink to ="/Booking" class="waves-effect waves-light btn" id = "new1">I just want to book reservation</NavLink>
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
            <NavLink to ="/" class="waves-effect waves-light btn" id = "new3">English</NavLink>
            <br/>
            <br/>

            <NavLink to ='/Home_Chinese' class="waves-effect waves-light btn" id = "new4">Chinese</NavLink>

        </div>
        <br/>
        <br/>
        <br/>
        <div class="row">

            <div class="col s3">
                <h4>What is B.L.D</h4>
                <h6>The B.L.D was founded in 2020, it is a new company which focus on recommending declicous food and good restaurants to the public. We also offer booking services to the public. </h6>
                <br/>
                <br/>
                <h4>Our company address and contact information</h4>
                <h6>Address: 876 clot street</h6>
                <h6>Tel: 676-080-3333</h6>
            </div>

            <div class="col s9">
                <img src ={logo} alt = "photo" id = "photo5"  ></img>
            </div>

        </div>
 

   
        <br/>
        <h4>Here are the quick search, you can  search the restaurant that you want</h4>
        <h5 style={{display:"inline"}}> Search: </h5><input type="text" placeholder="Enter item to be searched" style={elementStyle} onChange={(e)=>this.searchSpace(e)} />
        
        <i class="material-icons">search</i>
          {items}
        
         </div>
       )
        
      }
    }
    



export default Home;