let x= 10
let y=8
// console.log(x&y)
////////////////// ternaray operators /////////////

//  var result = (x<y)?"X is greater":"x is small";
//  console.log(result);

//  (1==1)?console.log("Okay"):console.log("Not okay");
 
//  var num = Number(prompt("Enter number"));
//  (num%2==0)?console.log(num, " is Even"):console.log(num, " is odd");



//////////// object ///////////

const car = 
{
    Name:"Creta",
    model:2024,
    color:"Black",
    price:1900000
};

console.log(car);


///////////// Arrays ///////////
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

/////////// fucnctions //////////

function myfun (arg1 , arg2=2){
    document.writeln(arg1+arg2);
};

myfun(6,1);


