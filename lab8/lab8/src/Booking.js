import React, { Component } from 'react'
import Select from 'react-select';
import { NavLink } from 'react-router-dom'
import Home from "./Home"
import $ from 'jquery';
import jquery from 'jquery';
import { Server } from "net"
import 'bootstrap';
import Datepicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import  { useState, Fragment } from 'react';
$('#klay').modal('show')

var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"]
const setDateFormat = "mm/dd/yy";
//var input1 = document.getElementById("select").value;


function validatePhone(txtPhone) {

    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^(1|)?(\d{3})(\d{3})(\d{4})$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}
function validateCredit(number){
    var a = document.getElementById(number).value;
    var filter = /^\d{16}$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}
function notice(){
    var tmp = window.confirm("Confrim to book reservation?");
    if(tmp=true){
        alert("You have made reservation ")
    }else{
        alert("You cancel the reservation")
    }
}


$(document).ready(function(){
    /*
    $( "#klay").datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),  
            maxDate: '+4M',
            // used to disable some dates
      
            beforeShowDay: unavailableDates
        }      
    );*/

    $("#phone1").on("change", function(){
        if (!validatePhone("phone1")){
            alert("Wrong format for phone");
            $("#phone1").val("(xxx)-xxx-xxxx");
            $("#phone1").addClass("error");
        }
        else {
            $("#phone1").removeClass("error");
        }
    });

    $("#phone1").on("mouseenter", function(){
    $("#phone1").addClass("showInput");
    });

    $("#phone1").on("mouseleave", function(){
    $("#phone1").removeClass("showInput");
    });
    $("#debit").on("mouseleave", function(){
        $("#debit").removeClass("showInput");
    });
    $("#debit1").on("mouseenter", function(){
        $("#debit1").addClass("showInput");
    });
    $("#debit1").on("change", function(){
        if (!validateCredit("debit1")){
            alert("Wrong format for card number,please enter 16 digits card number");
            $("#debit1").val("xxxx-xxxx-xxxx-xxxx");
            $("#debit1").addClass("error");
        }
        else {
            $("#debit1").removeClass("error");
        }
    });
    $("#debit1").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });

});



const options = [
    { value: 'XinMeiHua', label: 'XinMeiHua' },
    { value: 'XiaoYuanLou', label: 'XiaoYuanLou' },
    { value: 'Joey', label: 'Joey' },
    { value: 'Jumboo', label: 'Jumboo' },
  ];



export const Booking  = () =>{   
        React.state = {
          selectValue: ""
        }
      
        const handleDropdownChange=(e)=> {
            this.setState({
                selectValue:e.target.value
            })
        }
        const handlesubmit = (e)=>{
            e.preventDefault();
            console.log(React.state);
        }

    const [startDate, setStartDate] = useState(new Date);
    const d= new Date();

    const handleChange = date => {
        setStartDate( date );
     
    }
    const isWeekday = date => {

        const day =date.getDay(date);
        return day !== 0 && day !== 6;
    };
    return(

   
    <div class = "container">
        <form onSubmit = {handlesubmit}>
        <h4 class = "center">You are booking reservation</h4>
        <h5 class = "green-text">Which one do you want to book reservation of</h5>
        <Select options={options} id = "select"/>
        <br />
        <br />
     
        <p>Last Name:<input type="text" id="LN"></input></p>
        <p>Frist Name:<input type="text" id="FN"></input></p>
        <p>Emaii:<input type="text" id="EM"></input></p>
        <p>Number of People:<input type="text" id="number"></input></p>
       

        Date:<Datepicker
        selected={startDate}
        onChange={date=>setStartDate(date)}
        filterDate={isWeekday}
        id = "date"
        />
       <br/>

        <br/>

  
        <p>Phone Number(no space):<input type="text" id="phone1"></input></p>
        <p>Credit Card(no space): <input type="text" id="debit1" title="We ask for your credit card number in case of no-show, 20$ will be charged."></input></p>
        <br />
        
        <br />
        <br />
        <NavLink to ="/Home"class="waves-effect waves-light btn" onClick={notice}>Book </NavLink><br/>
        <br/>
        <NavLink to ="/Home" class="waves-effect waves-light btn" >Back</NavLink><br/>
  
        </form>
    </div>
     );
    
    }
export default Booking;