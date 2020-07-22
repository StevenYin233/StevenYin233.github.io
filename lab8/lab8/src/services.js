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