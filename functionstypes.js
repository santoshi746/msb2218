 //Named--These type of functions contains name at the time of definition
 function msg()
 {  
  document.writeln("Named Function");  
}  
msg();

// Anonymous - These type of functions doesn't contain any name. They are declared dynamically at runtime.

var display=function()  
{  
  document.writeln("Anonymous Function");  
}  
display();  



// JavaScript is a case sensitive language

//The == operator checks equality only whereas === checks equality, and data type

//Array in js
var colors = ["Red", "Yellow", "Green", "Orange"];  
var cities = ["Noida", "Delhi", "Ghaziabad"];  
alert(colors[2]);   // Output: Green  
alert(cities[1]);   // Output: Delhi