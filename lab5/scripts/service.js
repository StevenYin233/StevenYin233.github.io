// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions 
// https://flaviocopes.com/javascript-regular-expressions/ 
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers 
//code line 9-23,25-208 are inspired from professor https://github.com/carolinebarriere/carolinebarriere.github.io/blob/master/SEG3125-Module5-ValidatedService/scripts/service.js
//code line 24 is inspired from https://www.w3resource.com/
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


// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/ 
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"]
const setDateFormat = "mm/dd/yy";
//https://forum.jquery.com/topic/disable-single-day-of-a-week-in-datepickers
function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() == 0)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) == -1 ]
}
function datesforJames(date){
    if(date.getDay() == 1 || date.getDay() == 5 || date.getDay()==6||date.getDay()==0){
        return [false];
    }
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) == -1 ]
}

function datesforKlay(date){
    if(date.getDay() == 1 || date.getDay() == 5 || date.getDay()==6||date.getDay()==0||date.getDay()==4){
        return [false];
    }
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) == -1 ]
}




// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#phone").on("change", function(){
        if (!validatePhone("phone")){
            alert("Wrong format for phone");
            $("#phone").val("(xxx)-xxx-xxxx");
            $("#phone").addClass("error");
        }
        else {
            $("#phone").removeClass("error");
        }
    });
    $("#phone1").on("change", function(){
        if (!validatePhone("phone1")){
            alert("Wrong format for phone");
            $("#phone1").val("(xxx)-xxx-xxx");
            $("#phone1").addClass("error");
        }
        else {
            $("#phone1").removeClass("error");
        }
    });
    $("#debit").on("change", function(){
        if (!validateCredit("debit")){
            alert("Wrong format for card number,please enter 16 digits card number");
            $("#debit").val("xxxx-xxxx-xxxx-xxxx");
            $("#debit").addClass("error");
        }
        else {
            $("#debit").removeClass("error");
        }
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
  

    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery 
    // You can try different themes (the names are under the calendars) / This is Excite Bike 
    // To use a different theme you must include its css in your HTML file. 
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/ 
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/ 
    $( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),  
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }   
    );

    $( "#james").datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),  
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: datesforJames
        }   
    );
    $( "#klay").datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),  
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: datesforKlay
        }   
    );


    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put 
    $("#debit").on("mouseenter", function(){
        $("#debit").addClass("showInput");
    });

    $("#debit").on("mouseleave", function(){
        $("#debit").removeClass("showInput");
    });
    $("#debit1").on("mouseenter", function(){
        $("#debit1").addClass("showInput");
    });

    $("#debit1").on("mouseleave", function(){
        $("#debit1").removeClass("showInput");
    });
  
    // https://jqueryui.com/tooltip/ 
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#debit").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });
      $("#debit1").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });
      $("#phone").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });
      $("#phone1").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });

      /*
      $( "#r1" ).checkboxradio({
        classes: {
          "ui-checkboxradio": "highlight"
        }
      });
      

   
      $( "#r2" ).checkboxradio({
        classes: {
          "ui-checkboxradio": "highlight"
        }
      });
      */
    $("#apply").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
    });


});