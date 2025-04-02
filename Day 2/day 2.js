let x= 10
let y=8
// console.log(x&y)
/////////////////////////////////// ternaray operators /////////////////////////

//  var result = (x<y)?"X is greater":"x is small";
//  console.log(result);

//  (1==1)?console.log("Okay"):console.log("Not okay");
 
//  var num = Number(prompt("Enter number"));
//  (num%2==0)?console.log(num, " is Even"):console.log(num, " is odd");



////////////////////////////////////// object //////////////////////////////////

const car = 
{
    Name:"Creta",
    model:2024,
    color:"Black",
    price:1900000
};

console.log(car);


/////////////////////////////////////// Arrays /////////////////////////////////
// denoted by []

let arr=[1,2,3,4,5,6];
let arr2=[7,8,9,1]
arr[0]=8
// console.log(arr[0]);

/*functions of arrays 
Push  --> add new elemets at the last index
pop   --> remove last index element
Unshift-> add new element at the first index
shift --> remove first index element
concat--> concat/join arrays two or more than two
slice --> is used to create an array from existing array(m to n-1)
sort  --> to sort the array in ascending order
reverse-> to reverse the order of array
*/ 
arr.push(7) // adds 7 at last index
arr.pop() // removes last index value
arr.unshift(0) // Adds 0 to first index
arr.shift() // removes first index value
arr = arr.concat(arr2);// adds arr2 values to arr 
let arr3 = arr.slice(1,5) // creates new array from index value 2 to 5-1 from m to 
arr.sort()
arr.reverse() // combine both to get array in descending order

//////////////////////////////////// fucnctions ////////////////////////////////
// function is a block/collections of statements
// function _name_(arguments){logic}; is used to write functions
// using function we can reuse the code

// have two steps...
// 1: function declaration
// 2: function calling

function myfun (arg1 , arg2=2){
    document.writeln(arg1+arg2);
}; // function declaration

// myfun(6,1);// function calling
// 7206823978

function myfu1 (){
    let arg1 =+prompt("Enter first value");
    let arg2 =+prompt("Enter second value");
    document.writeln(arg1+arg2+"<br>");
}; 
// myfu1();

// function sum (arg1 , arg2=2){
//     document.writeln(arg1+arg2);
// };
// function sub (arg1 , arg2=2){
//     document.writeln(arg1-arg2);
// };
// function mul (arg1 , arg2=2){
//     document.writeln(arg1*arg2);
// };
// function dev (arg1 , arg2=2){
//     document.writeln(arg1/arg2);
// };

function greet(name){
    document.writeln(
        "Good morning :" + name +"<br>"
    );
};

// greet("Aditya");


/////////////////////////// control statement /////////////////////////////////

let a =+prompt("enter first value.");
let b =+prompt("enter second value.");
let c =+prompt("enter third value.");
let d =+prompt("enter forth value.");


if (a>b && a>c && a>d){
    document.writeln("The maximun number is: "+a );
} else if (b>c && b>d){
    document.writeln("The maximun number is: "+b );
} else if (c>d){
    document.writeln("The maximun number is: "+c );
}else if (d>b || a==b==c==d){
    document.writeln("The maximun number is: "+d );
}else{
    document.writeln("Invalid input");
}


///// Conditional statements:
//if 
//else
//else if

// looping statements
// for()
// while()
// do while()

// jumping statements
// switch()
// break
// continue 
