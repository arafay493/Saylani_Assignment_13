// Chapter# 5



// Q1

// var x = +prompt("Enter first number");
// var y = +prompt("Enter Second number");
// var z = x + y;

// document.write("Sum of" + " " + x + " " + "and"+ " " + y + " " + "is" + " " + z)



// Q2

// var x = +prompt("Enter first number");
// var y = +prompt("Enter Second number");
// var z = x - y;

// document.write("Difference of" + " " + x + " " + "and"+ " " + y + " " + "is" + " " + z)


// var x = +prompt("Enter first number");
// var y = +prompt("Enter Second number");
// var z = x * y;

// document.write("Multiplication of" + " " + x + " " + "and"+ " " + y + " " + "is" + " " + z)


// var x = +prompt("Enter first number");
// var y = +prompt("Enter Second number");
// var z = x / y;

// document.write("Division of" + " " + x + " " + "and"+ " " + y + " " + "is" + " " + z)



// var x = +prompt("Enter first number");
// var y = +prompt("Enter Second number");
// var z = x % y;

// document.write("Modulus of" + " " + x + " " + "and"+ " " + y + " " + "is" + " " + z)




// Q3



// var x;
// document.write("Value of variable declaration is: " + x + "</br>");

// x = 6
// document.write("Initial value: " + x + "</br>");

// x++;
// document.write("Value after increment is: " + x + "</br>");

// x = x+7;
// document.write("Value after addition is: " + x + "</br>");

// x--;
// document.write("Value after decrement is: " + x + "</br>");

// x = x % 3;
// document.write("The remainder is: " + x);




// Q4


// var prize_ticket = '600';
// var quantity = +prompt("Enter Quantity of tickets");

// document.write("The cost to buy" + " " + quantity + " " + "tickets to a movie" + " " + quantity * prize_ticket + "PKR");




// Q5


// document.write("Table of 4 <br>");

// var y = 4;

// for(i=1;i<=10;i++){
//     document.write("4 x " + i + " = " + y*i + "<br>")
// }



// Q6

// Celcius to Farhenhiet
// var x = prompt("Enter the Celcius Temperature") 
// var y;

// y = (x * 9/5) + 32;
// document.write(x +"<sup>o</sup>C is " + y + "<sup>o</sup>F");


// // Farhenhiet to Celcius
// var x = prompt("Enter the Farhenhiet Temperature") 
// var y;

// y = (x - 32) * 5/9;
// document.write("<br>" + x +"<sup>o</sup>F is " + y + "<sup>o</sup>C");




// Q7

// document.write("<h1>Shopping Cart</h1><br>")

// var item_1 = +prompt("Prize of first item");
// document.write("Price of first item is " + item_1 + "<br>");

// var quantity_1 = +prompt("Quantity of first item");
// document.write("Quantity of first item is " + quantity_1 + "<br>");

// var item_2 = +prompt("Prize of second item");
// document.write("Price of second item is " + item_2 + "<br>");

// var quantity_2 = +prompt("Quantity of second item");
// document.write("Quantity of second item is " + quantity_2 + "<br>");

// var Shipping = +prompt("Enter Shipping Charges");
// document.write("Shipping Charges is " + Shipping + "<br><br>");

// var total = item_1 + item_2 + Shipping;
// document.write("Total cost of your order is " + total);



// Q8

// document.write("<h1>Marks Sheet</h1><br>")

// var a = +prompt("Enter total marks");
// var b = +prompt("Enter obtained marks");
// var c = (b/a)*100;

// if(b<a){
//     document.write("Total Marks: " + a + "<br>");
//     document.write("Marks Obtained: " + b + "<br>");
//     document.write("Percentage: "+ c + "%");
// }
// else{
//     document.write("You did not write the correct Marks");
// }



// Q9

// document.write("<h1>Currency in PKR</h1><br>")

// var Riyal; 
// var US_dollor;
// var PKR ;
// var Total;
// var quantity_US = +prompt("Enter quantity of US dollor");
// var quantity_Riyal = +prompt("Enter quantity of Riyal");

// PKR = 1;
// US_dollor = 104.80*quantity_US*PKR;
// Riyal = 28*quantity_Riyal*PKR;
// Total = PKR + US_dollor + Riyal;
// document.write("Total Currency in PKR: " + Total);




// Q10

// var x = +prompt("Enter value");
// document.write("Result: " + ((x+5)*10)/2);



// Q11


// document.write("<h1>Age Calculator</h1><br>")

// var current_year = +prompt("Enter current year");
// var birth_year = +prompt("Enter Birth year");
// var age = current_year - birth_year;

// if(current_year>birth_year){
//     document.write("Current Year: " + current_year + "<br>");
//     document.write("Birth Year: " + birth_year + "<br>");
//     document.write("Your Age is: " + age + "<br>");
// } 
// else{
//     document.write("You did not write the correct information")
// }




// Q12



// document.write("<h1>The Geometrizer</h1>")

// const π = 3.142
// var r = +prompt("Enter Radius");
// document.write("Radius of the Circle is: " + r +"<br>");

// // For Circumference

// var C;
// C =  2 * π * r;
// document.write("Circumference of the circle is " + C +"<br>");

// // For Area

// var A;
// A = π * r * r;
// document.write("Area of the circle is: " + A);



// Q13

// document.write("<h1>The Lifetime Supply Calculator</h1>")

// var fav_snacks = prompt("What is your favorite snacks")
// document.write("Favorite Snacks: " + fav_snacks + "<br>");

// var fav_snacks = prompt("What is your favorite snacks")
// document.write("Favorite Snacks: " + fav_snacks + "<br>");

// var fav_snacks = prompt("What is your favorite snacks")
// document.write("Favorite Snacks: " + fav_snacks + "<br>");

// var fav_snacks = prompt("What is your favorite snacks")
// document.write("Favorite Snacks: " + fav_snacks + "<br>");
