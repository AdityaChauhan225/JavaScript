// //  for of loop

// //  it performs a loop on a string  and arrays.

// let str= "Hello world!" 

// for(let i of str)// --> iterate the characters
//     {
//     document.writeln(i+"<br>");
// }


// //  for in loop

// // used to perfrom loop in objects
// let obj = {
//     name:"Aditya",
//     age:20,
//     city:"gurugram",
//     college:"piet"
// }
// for (let i in obj)// Iterates the keys of obj
//     {
//     // document.writeln(i);
//     document.writeln(i+" : "+obj[i]+"<br>")// to acces values with keys
// }


// // template literals
// // starts and end with `` and can include variables with ${ } without the need of commas

// let var1 = 5  , var2 = 4;
// document.writeln(`var1 = ${var1} and var2 = ${var2}`);


// question

let title = prompt("Enter your name");

document.writeln(`@${title}${title.length}`);