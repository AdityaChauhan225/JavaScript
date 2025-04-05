//////////////////////////////// Event listners ////////////////////////////////

// addevent listener

// example
// addeventListner(event,function(){
// logic... 
// })

// document.getElementById("form").addEventListener('submit',function(){
//     const obj={
//         email:document.getElementById("mail").value,
//         password:document.getElementById("pass").value,
//         phno:document.getElementById("mbn").value,
//     }
//     for (var1 in obj){
//         document.writeln(obj[var1]+"<br>");
//     }
// }) 


////////////////////////////////// Date obj ////////////////////////////////////


let date = new Date();
function time(){
let current=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
document.getElementById("time").innerHTML=current;
}
setInterval(time,10000)
    time();


// document.writeln(`${date.getDate()} : ${date.getMonth()} : ${date.getFullYear()}`);

// ALERT
// alert("hello");

// // CONFIRM
// confirm("do you agree");

