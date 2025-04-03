/////////////////////////// looping statements /////////////////////////////////

// 1: For loop
// 2: while loop
// 3: do while loop

// for loop can be classified into 3 types
// a: for each
// b: for of
// c: for in

// common for all loops 
// initialization-->condition-->updation



// for loop

// for (initilization;condition;updation){
// statements;
// };

// example:

// for(let i=100;i>0;--i)
// {
//     if (i%2!=0){
//         document.writeln(i);
//     }
// }

// for each 



// for of



// for in



// while

// let x=1
// while(x<=10){
    
//     document.writeln("2 x "+x+"="+(x*2)+"<br>");

//     x++;
// };
// document.writeln("<br>")

// // do while
// let y=1
// do {
//     document.writeln("5 x "+y+"="+(y*5)+"<br>");
//     y++;
// } while (y<=10);


// switch case

let key = +prompt("Enter a number between 1 and 3: "); 
switch (key) {
    case 1:
        document.writeln("number 1");
        break;
    case 2:
        document.writeln("number 2");
        break;
    case 3:
        document.writeln("number 3");
        break;
    default:
        document.writeln("invalid number");
        break;
}



///////////////////////////// String functions /////////////////////////////////

// length() --> returns the length of a string
// Tolowercase()--> converts all the characters of a string to lowercase
// touppercase()--> converts all the characters of a string to uppercase
// repeat()--> returns the string repeated n times
//chatAt()--> returns the character at the specified index
// charCodeAt()--> returns the unicode of the character at the specified index
// slice()--> returns the substring of the string from the specified index to the specified index
// startsWith()--> returns true if the string starts with the specified string
// endsWith()--> returns true if the string ends with the specified string
// includes()--> returns true if the string contains the specified string
// concat()--> concatenates two strings
// substring()--> returns the substring of the string from the specified index to the specified index



