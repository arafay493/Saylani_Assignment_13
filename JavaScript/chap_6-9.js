// Chapter#6-9



// Q1



// var a = +prompt("Enter Number");

// document.write("Result:<br>The value of a is: " + a + "<hr><br>")
// document.write("The value of ++a is: " + ++a + "<br>Now the value of a is: " + a + "<br><br><br>")
// document.write("The value of a++ is: " + a++ + "<br>Now the value of a is: " + a + "<br><br><br>")
// document.write("The value of --a is: " + --a + "<br>Now the value of a is: " + a + "<br><br><br>")
// document.write("The value of a-- is: " + a-- + "<br>Now the value of a is: " + a + "<br><br><br>")




// Q2


// var a = 2;
// document.write("a is " + a + "<br>");

// var b = 1;
// document.write("b is " + b + "<br>");

// var result = --a - --b + ++b + b--;

// // Result Explaination
// // --a = 1
// // --a - --b = 1
// // --a - --b + ++b = 2
// // --a - --b + ++b + b-- = 3

// document.write("result is " + result);




// Q3


// var name = prompt("Please Enter your name");
// alert("Your name is " + name);



// Q4 not given

// Q5


// var num = +prompt("Enter Number")

// if(num>0){
//     for(i=1;i<=10;i++){
//         document.write(num + " x " + i + " = " + num*i + "<br>")
//     }
// }
// else{
//     num = 5;
//     for(i=1;i<=10;i++){
//         document.write(num + " x " + i + " = " + num*i + "<br>")
//     }
// }



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

// var per_obt_marks_a = obt_marks_a/T_marks_a*100;
// var per_obt_marks_b = obt_marks_b/T_marks_b*100;
// var per_obt_marks_c = obt_marks_c/T_marks_c*100;
// var per_obtT_marks = obtT_marks/GT_marks*100;


// document.write('<table>' +
//         '<tr>' +
//             '<th>Subject</th>' +
//             '<th>Total Marks</th>' +
//             '<th>Obtained Marks</th>' +
//             '<th>Percentage</th>'+
//         '</tr>' +
//         '<tr>' +
//             '<td>'+a+'</td>'+
//             '<td>'+T_marks_a+'</td>'+
//             '<td>'+obt_marks_a+'</td>'+
//             '<td>'+per_obt_marks_a+ "%" +'</td>'+
//         '</tr>'+
//         '<tr>'+
//             '<td>'+b+'</td>' +
//             '<td>'+T_marks_b+'</td>'+
//             '<td>'+obt_marks_b+'</td>'+
//             '<td>'+per_obt_marks_b+ "%" +'</td>'+
//         '</tr>' +
//         '<tr>' +
//             '<td>'+c+'</td>'+
//             '<td>'+T_marks_c+'</td>'+
//             '<td>'+obt_marks_c+'</td>'+
//             '<td>'+per_obt_marks_c+ "%" +'</td>'+
//         '</tr>'+
//         '<tr>'+
//             '<td>'+'</td>'+
//             '<td>'+'<b>'+GT_marks+'</b>'+'</td>'+
//             '<td>'+'<b>'+obtT_marks+'</b>'+'</td>'+
//             '<td>'+'<b>'+per_obtT_marks+ "%"+'</b>' +'</td>'+
//         '</tr>'+
//     '</table>')
