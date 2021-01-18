// CH # 35 - 38



// Q1



// function date(today) {
//     document.write(today);
// }

// date(new Date());



// Q2


// function Name(){
//     var first_name = prompt("Enter your First name")
//     var last_name = prompt("Enter your Last name")
//     var full_name = first_name + " " + last_name;
//     return full_name;
// }

// alert("Hi! Your Full name is " + Name());



// Q3




// function add(x , y){    
//     var z = x + y;
//     return z;
// }
// var g = add(+prompt("Enter First Number") , +prompt("Enter Second Number"));
// alert("Sum of Numbers ="+ " " + g);



// Q4



// function Calculator(num1, opr , num2){   

//     if(opr === "+"){
//         var result = num1 + num2;
//         return result;
//     }    
//     else if(opr === "-"){
//         var result = num1 - num2;
//         return result;
//     }
//     else if(opr === "*"){
//         var result = num1 * num2;
//         return result;
//     }
//     else if(opr === "/"){
//         var result = num1 / num2;
//         return result;
//     }
//     else if(opr === "%"){
//         var result = num1 / num2 *100;
//         return result;
//     }
//     else{
//         return "You did not write the correct operator"
//     }
// }


// var result = Calculator(prompt("Enter First Number") , prompt("Enter Operator Name") , prompt("Enter Second Number"));

// alert(result);



// Q5


// function squares(x){
    
//     return x*x;  

// }

// var result = squares(+prompt("Enter Number which you want to be squared"));
// alert(result);




// Q6



// function factorial(n){
//     if(n === 0 || n === 1){
//         return 1;
//     }
//     else if(n < 0){
//         return "Factorial Must be of positive numbers"

//     }
//     else{
//         var f = n*factorial(n-1);
//         return f;
//     }
// }

// var fact = factorial(prompt("Enter the number which you want to fatoriate"));
// alert(fact);



// Q7



// function count(x , y){
//     for(i = x; i <= y ; i++){
//        document.write(i + " , ")
//     }  
// }

// count(5,10)




// Q8




// function calculateSquare(){
//     var perp = +prompt("Enter Perpendicular Value");
//     var base = +prompt("Enter Base Value");

//     var sq_perp = Math.pow(perp , 2);
//     var sq_base = Math.pow(base , 2);

//     return sq_perp + sq_base;
// } 


// function Hypotenouse(){
    
//     var hyp = Math.sqrt(calculateSquare());

//     return hyp;
// } 


// alert(Hypotenouse());



// Q9


// (1) Argument as Values


// function Area(width , height){
//     var A = width*height;
//     return "Area is: " + A;
// }


// alert(Area(prompt("Enter Width"), prompt("Enter Height")));


// (2) Argument as Variable


// function Area(width , height){
//     var A = width*height;
//     return "Area is: " + A;
// }

// var x = +prompt("Enter Width")
// var y = +prompt("Enter Height")

// alert(Area(x , y));




// Q10




// Q11



// function Upper_case(){
//     var str = prompt("Enter Some Text");
//     var arr = str.split(' ');
//     var new_arr = [];

//     for(var i = 0; i<arr.length; i++){
//         new_arr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase())
//     }

//     return new_arr.join(' ');

// }

// alert(Upper_case());




// Q12


// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// alert(find_longest_word('Web Development Tutorial'));



// Q13


// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// alert(char_count(prompt("Enter Some text").toLowerCase(), prompt("Enter letter you want to count").toLowerCase()));



// Q14



// var Radius = +prompt("Enter Radius")

// function calcCircumference(){
//     var circumference = 2 * Math.PI * Radius
//     return circumference;
// }


// function calcArea(){
//     var Area = Math.PI * Math.pow(Radius , 2);
//     return Area; 

// }

// document.write("Circumference of the circle is: " + calcCircumference().toFixed(3) + "<br>Area of the Circle is: " + calcArea().toFixed(3));