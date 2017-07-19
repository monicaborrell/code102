# Tuesday notes
* how to use vi

how do I get the console?
in Chrome, View\Developer Tools\Javascript Console
you can type JS code directly into the console
you can type the variable into the console and have it tell you the value of the variable

how do I split my windows?


cmd /  comments out a bunch of code in atom (highlight text first)

double and single quotes both designate strings

"monday" === "Monday"
result is false
"Monday".toLowerCase() === "monday"
result is true  
test in the console!


// FUNCTIONS - for doing multiple lines of code:  
//This is what a function looks like:

var divideByThree = function (number) {
    var val = number / 3;
    console.log(val);
};
//to call the function do something like:  
divideByThree(6);
//result should be 2

// PARAMETERS - price is a parameter - you can fill it in when you call the function
var orangeCost = function(price) {
    var extprice = 5 * price;
    console.log(extprice);
};
orangeCost(5)
