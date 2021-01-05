

// Chapter # 9-11




// Q1


// var city_name = prompt("Enter City Name");


// if(city_name === 'Karachi'){
//     alert("“Welcome to city of lights”")
// }
// else{
//     alert("“Welcome to "+ city_name +"”")
// }



// Q2

// var gender = prompt("Enter gender");

// if(gender === 'male'){
//     alert("Good Morning Sir")
// }
// else{
//     alert("Good Morning Ma’am")
// }




// Q3



// var color = prompt("Enter color");

// if(color === 'Red'){
//     document.write('<table>'+
//         '<tr>'+
//             '<th>'+ "Signal Color" +'</th>'+
//             '<th>' + "Message" + '</th>'+
//         '</tr>'+
//         '<tr>'+
//             '<td>'+'<b>Red</b>'+'</td>'+
//             '<td>' + "Must Stop" + '</td>' +
//         '</tr>')
// }

// else if(color === 'Yellow'){
//     document.write('<table>'+
//         '<tr>'+
//             '<th>'+ "Signal Color" +'</th>'+
//             '<th>' + "Message" + '</th>'+
//         '</tr>'+
//         '<tr>'+
//             '<td>'+'<b>Yellow</b>'+'</td>'+
//             '<td>' + "Ready to move" + '</td>' +
//         '</tr>')
// }

// else if(color === 'Green'){
//     document.write('<table>'+
//         '<tr>'+
//             '<th>'+ "Signal Color" +'</th>'+
//             '<th>' + "Message" + '</th>'+
//         '</tr>'+
//         '<tr>'+
//             '<td>'+'<b>Green</b>'+'</td>'+
//             '<td>' + "Move" + '</td>' +
//         '</tr>')
// }

// else{
//     document.write("You did not write the correct information")
// }




// Q4



// var fuel_quantity = +prompt("Enter fuel quantity in liters");

// if(fuel_quantity < 0.25){
//    alert("Please Refill the fuel")
// }
// else{
//     alert("Carry on")
// }



// Q5


// Outputs

// (a). given condition for variable a is true

// (b). not displayed

// (c). condition 2 is true

// (d). The cost equals

// (e). True

// (f). car is smaller than cat



// Q6



// var a = prompt("Enter first subject")
// var b = prompt("Enter second subject")
// var c = prompt("Enter Third subject")

// var T_marks_a = 100;
// var T_marks_b = 100;
// var T_marks_c = 100;
// var GT_marks = T_marks_a + T_marks_b + T_marks_c;


// var obt_marks_a = +prompt("Enter marks you obtained for " + a);
// var obt_marks_b = +prompt("Enter marks you obtained for " + b);
// var obt_marks_c = +prompt("Enter marks you obtained for " + c);

// var obtT_marks = obt_marks_a + obt_marks_b + obt_marks_c

// var per_obt_marks_a = obt_marks_a / T_marks_a * 100;
// var per_obt_marks_b = obt_marks_b / T_marks_b * 100;
// var per_obt_marks_c = obt_marks_c / T_marks_c * 100;
// var per_obtT_marks = obtT_marks / GT_marks * 100;



// document.write('<h1>Marks Sheet</h1><br>')


// if (per_obt_marks_a<=100 && per_obt_marks_b<=100 && per_obt_marks_c<=100){

//     if(per_obtT_marks <= 100 && per_obtT_marks >= 80){
//     document.write('Total Marks: ' + GT_marks + '<br>')
//     document.write('Obtained Marks: ' + obtT_marks + '<br>')
//     document.write('Percentage: ' + per_obtT_marks + '<br>')
//     document.write('Grade : A+' + '<br>')
//     document.write('Remarks : Excellent')
//     }
//     else if(per_obtT_marks < 80 && per_obtT_marks >= 70) {
//         document.write('Total Marks: ' + GT_marks + '<br>')
//         document.write('Obtained Marks: ' + obtT_marks + '<br>')
//         document.write('Percentage: ' + per_obtT_marks + '<br>')
//         document.write('Grade : A' + '<br>')
//         document.write('Remarks : Good')
//     }
//     else if (per_obtT_marks < 70 && per_obtT_marks >= 60) {
//         document.write('Total Marks: ' + GT_marks + '<br>')
//         document.write('Obtained Marks: ' + obtT_marks + '<br>')
//         document.write('Percentage: ' + per_obtT_marks + '<br>')
//         document.write('Grade : B' + '<br>')
//         document.write('Remarks : You need to improve')
//     }
//     else if (per_obtT_marks < 60) {
//         document.write('Total Marks: ' + GT_marks + '<br>')
//         document.write('Obtained Marks: ' + obtT_marks + '<br>')
//         document.write('Percentage: ' + per_obtT_marks + '<br>')
//         document.write('Grade : Fail' + '<br>')
//         document.write('Remarks : Sorry')
//     }
//     else {
//         document.write('You did not write the correct information')
//     }

// }
// else {
//     document.write('You did not write the correct information')
// }




// Q7



// Q8



// var num = prompt("Enter Number");

// if(num % 3 === 0){
//     alert(num + " is divisible by 3")
// }
// else{
//     alert(num + " is not divisible by 3")
// }



// Q9



// var num = prompt("Enter Number");

// if(num % 2 === 0){
//     alert(num + " is Even Number")
// }
// else{
//     alert(num + " is Odd Number")
// }



// Q10



// var T = +prompt("Enter temperature value");

// if(T > 40){
//     alert("“It is too hot outside.”")
// }
// else if(T > 30){
//     alert("“The Weather today is Normal.”")
// }
// else if(T > 20){
//     alert("“Today’s Weather is cool.”")
// }
// else if(T > 10){
//     alert("“OMG! Today’s weather is so Cool.”")
// }
// else{
//     alert("“OMG! Today’s weather is too Cold.”")
// }





// Q11



// const operator = prompt('Enter operator ( either +, -, * or / ): ');


// const number1 = Number(prompt('Enter first number: '));
// const number2 = Number(prompt('Enter second number: '));

// var result;


// if (operator == '+'){
//     result = number1 + number2;
// }
// else if (operator == '-') {
//     result = number1 - number2;
//     alert(result)
// }
// else if (operator == '*') {
//     result = number1 * number2;
//     alert(result)
// }
// else if (operator == '/') {
//     result = number1 / number2;
//     alert(result)
// }
// else{
//     result = number1 % number2;
//     alert(result)
// }
