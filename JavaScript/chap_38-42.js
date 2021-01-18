// CH # 38 - 42



// Q1




// function Raise(a , b){
//     a = +prompt("Enter Number");
//     b = +prompt("Enter Power");
//     var c = Math.pow(a , b);

//     return c;
// }


// alert(Raise());




// Q2



// function Leap_Year(Year){
//     Year = prompt("Enter Year to check wheather the year is a leap year or not");
//     if(Year % 4 === 0){
//         alert("This is a leap Year");
//     }
//     else{
//         alert("This is not a leap year");
//     }
// }


// Leap_Year();




// Q3


//     var a = 5;
//     var b = 4;
//     var c = 3;
// function Semi_Perimeter(){

//     var S_primeter = (a + b + c)/2;

//     return S_primeter;

// }



// function AreaOfTriangle(){
//     var S = Semi_Perimeter();
//     var Area = S * (S - a) * (S - b) * (S - c);

//     return "Area of the triangle is: " + Area;

// }


// alert(AreaOfTriangle());



// Q4




// function Marks(){
    // var sub1 = +prompt("Enter marks in first Subject");
    // var sub1 = +prompt("Enter marks in second Subject");
    // var sub1 = +prompt("Enter marks in third Subject");

//     var avg = (sub1 + sub2 + sub3)/3;

//     return avg.toFixed(3);
// }


// function Percentage(){
//     var avg = Marks();
//     var per = avg/100*100;
//     return per.toFixed(3);
// }


// function Main_function(){

//     var marks = Marks();
//     var per = Percentage();
//     var Result = "Your Average Marks is: " + marks + "\n" + "Your Percentage is: " + per
//     return Result;
// }


// alert(Main_function());



// Q5



// Q6



// function removeVowels( input ){
//     var input = prompt("Enter Some text");
//     return input.replace(/[aeiouAEIOU]/g, "");
// }

// alert(removeVowels());



// Q7



// Q8

// var distance = +prompt("Enter distance b/w two cities in Km")

// function distance_meter(){
//     var dist_meter = distance*1000;
//     return dist_meter;
// }

// function distance_feet(){
//     var dist_feet = distance*3280.84;
//     return dist_feet;
// }

// function distance_inches(){
//     var dist_inches = distance*39370.1;
//     return dist_inches;
// }

// function distance_centimeters(){
//     var dist_centimeter = distance*100000;
//     return dist_centimeter;
// }

// document.write(`<h3>Distance in Meters is: ${distance_meter()} <br>Distance in feets is: ${distance_feet()} <br>Distance in Inches is: ${distance_inches()} <br>Distance in Centimeters is: ${distance_centimeters()}</h3>`);





// Q9




// function overTime(){
//     var OTP_PerHour = 12;
//     var Total_hours = Math.ceil(+prompt("Enter No of Hours the Emploee worked"));
//     var overTimeHours = Total_hours - 40;
//     if(Total_hours>40){
//         var OTP = overTimeHours*OTP_PerHour
//         return OTP;
//     }
//     else{
//         return "Sorry! over time pay can be have by working greater tha 40 Hours "
//     }
// }


// alert(overTime());



// Q10