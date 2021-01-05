// Chapter # 14-16


// Q1

// var arr = [];



// Q2


// var arr = [ [ ] , [ ]]



// Q3


// var string_arr = ['Ali' , 'Basit' , 'Ghous'];



// Q4


// var num_arr = [ 1 ,2,3,4,5];



// Q5



// var boolean_arr = [true , false]



// Q6



// var mixed_arr = ["ali" , 1,2,3,true,['hamza','Basit']];




// Q7


// var heading = '<h3>Qualification:</h3>'
// document.write(heading);
// var edu_qualification = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];
// var count = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8];



// for (var a = 0; a < edu_qualification.length; a++) {
        
//         document.write('<b>' + count[a] + '</b>'  + ")    " + '<b>' + edu_qualification[a] + '</b>' + "<br>")      
// }



// Q8


// var names = [ "Micheal" , "Jhon" , "Tony"];
// var score = [ 320 , 230 , 480];
// var T_marks = [ 500 , 500 , 500];



// for(i = 0 ; i < names.length ; i++){
//         var per = score[i]/T_marks[i] *100;
//         document.write("Score of " + names[i] + " is " + score[i] + ". " + "Percentage: " + per + "%<br>")
// }




// Q9


// (a)

// var arr = ["red" , "blue" , "green"];

// arr.unshift(prompt("Enter the color you want to add at start"))

// document.write(arr);


// (b)

// var arr = ["red" , "blue" , "green"];

// arr.push(prompt("Enter the color you want to add at the end"))

// document.write(arr);

// (c)

// var arr = ["red" , "blue" , "green"];

// arr.unshift(prompt("Enter the first color you want to add at start"), prompt("Enter the second color you want to add at start"))

// document.write(arr);

// (d)

// var arr = ["red" , "blue" , "green"];

// arr.shift(0);

// document.write(arr)

// (e)

// var arr = ["red" , "blue" , "green"];

// arr.pop(0);

// document.write(arr)


// (f)

// var arr = ["red" , "blue" , "green"];

// arr.splice(+prompt("Enter Color Index"),0,prompt("Enter Color Name"));

// document.write(arr)


// (g)

// var arr = ["red" , "blue" , "green", "yellow" , "purple"];

// arr.splice(+prompt("Enter Color Index"),prompt("How many color you want to delete"));

// document.write(arr)




// Q10

// var score = []

// for(a=0 ; a<5 ; a++){
//        score[a] = prompt("Enter scores");     
// }

// document.write( "Scores of Students : " + score + "<br>");

// document.write( "Scores of Students : " + score.sort());




// Q11


// var city = []

// for(a=0 ; a<5 ; a++){
//        city[a] = prompt("Enter City Names");     
// }

// document.write( "Cities list:<br> " + city + "<br><br>");

// var select_city = city.slice(1,4)

// document.write( "Selected Cities list:<br> " + select_city);



// Q12


// var arr = [" This " , " is ", " my " , " cat "];

// document.write("Array:<br> " + arr + "<br><br>");

// var join_arr = arr.join("")

// document.write("String:<br>" + join_arr);



// Q13


// var colors = new Array();                
// var count  =  colors.push("keyboard");       
// var count1 = colors.push("mouse");         
// var count2 = colors.push("mouse");         
// var count3 = colors.push("mouse");         

// document.write("Devices<br>" + colors + "<br><br>")

// // for(a = 0; a < colors.length ; a++){
// //         document.write("Out:<br>" + color[a] + "<br>")
// // }


// document.write("Out:<br>" +  + "<br>")
// document.write("Out:<br>" + count2 + "<br>")
// document.write("Out:<br>" + count3)

