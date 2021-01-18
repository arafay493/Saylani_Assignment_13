// CH # 31 - 34


// Q1


// var date = new Date();
// document.write(date);



// Q2


// var arr_month = [ "January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "Octoober" , "November" , "December"];

// var date = new Date();
// var index_month = date.getMonth();

// for(var i = 0 ; i < arr_month.length ; i++){
//     if(index_month === arr_month.indexOf(arr_month[i])){
//         alert("Current Month  :" + "     " + arr_month[i])
//     }
// }


// OR



// var arr_month = [ "January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "Octoober" , "November" , "December"];

// var date = new Date();
// var index_month = date.getMonth();
// var nameOfMonth = arr_month[index_month];
// alert("Current Month  :  " + nameOfMonth)


// Q3




// var arr_day = [["Sunday"] , ["Monday"] , ["Tuesday"] , ["Wednesday"] , ["Thursday"] , ["Friday"] , ["Saturday"]];

// var date = new Date();
// var index_day = date.getDay();
// var nameOfDay = arr_day[index_day];
// var str_nameOfDay = nameOfDay.toString();
// var niceNameOfDay = str_nameOfDay.slice(0 , 3)
// alert("Today is  :  " + niceNameOfDay)



// OR



// var date = new Date();
// var str_date = date.toString();
// var day = str_date.slice(0 , 3);
// alert("Today is " + day);



// Q4

// var arr_day = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];

// var date = new Date();
// var day = date.getDay();
// var index1 = arr_day.indexOf("Sunday")
// var index2 = arr_day.indexOf("Saturday")


// if(day === index1 || index2){
//         alert("It's Fun day")
// }

// else{
//         alert("It's Normal day")
// }





// Q5


// var full_date = new Date();
// var date = full_date.getDate();
// // alert(date);

// if(date>=1 && date<=15){
//     alert("First Fifteen days of the month")
// }
// else{
//     alert("Last days of the month")
// }



// Q6


// var date = new Date();
// var milliSeconds = date.getTime();
// var minutes = date.getMinutes();

// document.write(`Current Date: ${date} <hr>Elapsed milliseconds since January 1,1970 ${milliSeconds} <hr>Elapsed minutes since January 1,1970 ${minutes}`)



// Q7



// var date = new Date();
// var hour = date.getHours();



// if(hour>=12 && hour<=23.59){
//     document.write("It's PM");
// }
// else{
//     document.write("It's AM")
// }



// Q8


// var laterDate = new Date("December 31 ,2020");
// document.write("Later Date: " + laterDate)



// Q9

 
// var date1 = new Date("03/24/2020"); 
// var date2 = new Date(); 
  
// var Difference_In_Time = date2.getTime() - date1.getTime();
// var days_passed = Math.floor(Difference_In_Time/(1000*60*60*24));

// document.write(days_passed + " days have passed since 1st Ramzan, 2020");
  


// Q10


// var date1 = new Date("01/01/2015"); 
// var date2 = new Date(); 
  
// var Difference_In_Time = date2.getTime() - date1.getTime();
// var seconds_passed = Math.floor(Difference_In_Time/(1000*60));

// document.write("On reference Date " + date2 + "<br>" + seconds_passed + " seconds have passed since begining of 2015");




// Q11




// Q12



// var date1 = new Date();

// var date2 = new Date("01/18/1920"); 

// alert("Current Date: " + date1 + " \n100 years back,it was " + date2)
  



// Q13



// var dob = new Date(prompt("Enter your birth year"));
// var dobMilli = dob.getTime();

// var today = new Date();
// var todayMilli = today.getTime();

// var diff = todayMilli - dobMilli;
// var age = diff/(1000*60*60*24*30*12)
// document.write(Math.floor(age));




// Q14


// var Customer_name = prompt("Enter customer name");
// var Month = prompt("Enter Month");
// var N_Units = +prompt("Enter Number of unit");
// var charges_per_unit = +prompt("Enter Number of Charges per Unit");
// var date = new Date()
// var date1 = date.getDate();
// var late_Payment_surcharge = +prompt("Enter Late Charges")
// var net_ammount = charges_per_unit*N_Units;
// var gross_amount = charges_per_unit*N_Units + late_Payment_surcharge;


// if(date1>=1 && date1<=14){

    
//     document.write("<h1>K - Electric Bill</h1>" + "<br>Customer Name: " + Customer_name + "<br>Month: " + Month + "<br>Number of Units: " + N_Units + "<br>Charges Per Unit: " + charges_per_unit + "<br><hr>Net Amount Payable(Within due date): " +net_ammount)

// }
// else{
    
//     document.write("<h1>K - Electric Bill</h1><br>" + "Customer Name: " + Customer_name + "<br>Month: " + Month + "<br>Number of Units: " + N_Units + "<br>Charges Per Unit: " + charges_per_unit + "<br><hr>Net Amount Payable(Within due date): " + net_ammount + "<br>Late Payment Surcharge: " + late_Payment_surcharge + "<br>Gross Amount Payable(After due date): " + gross_amount);
// }
