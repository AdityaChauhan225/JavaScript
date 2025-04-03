// data types
// 2 types

// 1: premitive (have 7 types)
//    -- Number  
//    -- String
//    -- Boolean
//    -- Undefined
//    -- Null 
//    -- BigInt --> declared using bigInt()
//    -- Symbol --> declared using symbol()

// 2: non premitive..objects 
//    -- Object --> collection of variables

// declaring a object

const Student = 
{
    name:"Aditya",
    age:20,
    city:"Gurugram",
    study:"B-tech"
}

Student["age"] = 21;
Student.name="Aditya Chuahan"

console.log(Student); // To fetch the whole obj
console.log(Student.age);// To fetch a single value // method 1
console.log(Student["name"]);// To fetch a single value // method 2


////////////////////////  Ternirary operator /////////////////////

// can also be called simpler conditional statement
// It takes 3 arguments
/*Syntax --> a?b:c --> a is the condition and 
                       b is the output if condition is true and 
                       c is the output when a is false*/

var result = 20>10 ? "20 is greater than 10" : "20 is not greater than 10"
console.log(result)


//////////////////// Practice problem /////////////////////

var marks = Number(prompt("Enter Marks"))

if (marks>=80 && marks <=100){
    console.log("A")
}  else if (marks>=70 && marks <=79) {
    console.log("B")
}  else if (marks>=60 && marks <=69) {
    console.log("C")
}  else if (marks>=50 && marks <=59) {
    console.log("D")
}  else if (marks>=0 && marks <=49) {
    console.log("F")
}  else {
    console.log("Enter the value from range 0 - 100")
}



