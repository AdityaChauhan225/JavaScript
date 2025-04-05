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
document.writeln(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+":"+date.getMilliseconds()+"<br>");
document.writeln(`${date.getDate()} : ${date.getMonth()} : ${date.getFullYear()}`);

// ALERT
alert("hello");

// CONFIRM
confirm("do you agree");

