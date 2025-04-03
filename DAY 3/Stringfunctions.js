///////////////////////////// String functions /////////////////////////////////

// 1: length() --> returns the length of a string
// 2: Tolowercase()--> converts all the characters of a string to lowercase
// 3: touppercase()--> converts all the characters of a string to uppercase
// 4: repeat()--> returns the string repeated n times
// 5: chatAt()--> returns the character at the specified index
// 6: charCodeAt()--> returns the unicode of the character at the specified index
// 7: slice()--> returns the substring of the string from the specified index to the specified index
// 8: startsWith()--> returns true if the string starts with the specified string
// 9: endsWith()--> returns true if the string ends with the specified string
// 10: includes()--> returns true if the string contains the specified string
// 11: concat()--> concatenates two strings
// 12: substring()--> returns the substring of the string from the specified index to the specified index




let str = "Hello World!";
document.writeln("1. length() :- "+str.length+"<br>");
document.writeln("2. toLowerCase() :- "+str.toLowerCase()+"<br>");
document.writeln("3. toUpperCase() :- "+str.toUpperCase()+"<br>");
document.writeln("4. repeat() :- "+str.repeat(3)+"<br>");
document.writeln("5. charAt() :- "+str.charAt(0)+"<br>");
document.writeln("6. charCodeAt() :- "+str.charCodeAt(0)+"<br>"); 
document.writeln("7. slice() :- "+str.slice(0,5)+"<br>");
document.writeln("8. startsWith() :- "+str.startsWith("Hello")+"<br>");
document.writeln("9. endsWith() :- "+str.endsWith("World!")+"<br>");
document.writeln("10. includes() :- "+str.includes("Hello")+"<br>");
document.writeln("11. concat() :- "+str.concat(" How are you?")+"<br>");
document.writeln("12. substring() :- "+str.substring(0,5)+"<br>");
