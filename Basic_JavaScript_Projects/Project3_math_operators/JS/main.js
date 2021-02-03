function addition_Function() {    //Defining a function and naming it           
    var addition = 6+5;    //Defining a variable and giving it an expression
    document.getElementById("Math").innerHTML="6+5=" + addition;    //Putting value of the result into HTML element with "Math" id
}

function subtraction_Function() {   //Defining a function and naming it 
    var subtraction = 12-9;    //Defining a variable and giving it an expression
    document.getElementById("Math1").innerHTML="12-9=" + subtraction;    //Putting value of the result into HTML element with "Math1" id
}

function multiply() {    //Defining a function and naming it 
    var multiply = 5*8;    //Defining a variable and giving it an expression
    document.getElementById("Math2").innerHTML="5*8=" + multiply;   //Putting value of the result into HTML element with "Math2" id
}

function division() {   //Defining a function and naming it 
    var divide = 72/8;    //Defining a variable and giving it an expression
    document.getElementById("Math3").innerHTML="72/8=" + divide;    //Putting value of the result into HTML element with "Math3" id
}

function more_math() {    //Defining a function and naming it 
    var equation = 12 * 4 / 12;     //Defining a variable and giving it an expression
    document.getElementById("Math4").innerHTML= "12 multiplied by 4 and divided by 12 = " + equation;   //Putting value of the result into HTML element with "Math4" id
}

function modulus() {    //Defining a function and naming it 
    var remainder= 34%8;    //Defining a variable and giving it an expression
    document.getElementById("Math5").innerHTML= "When 34 is divided by 8, the remainder is: " + remainder;  //Putting value of the result into HTML element with "Math5" id
}

function negation() {   //Defining a function and naming it 
    var x=-6;    //Defining a variable and giving it an expression
    document.getElementById("Math6").innerHTML= -x;     //Putting value of the result into HTML element with "Math6" id
}

var X=3;    //Defining a variable and naming it
X++;    //Creating a function that increments the value of the variable X
document.write(X);    //Displaying the value of the incremented variable

var Y=6;    //Defining a variable and naming it
Y--;    //Creating a function that decrements the value of the variable Y
document.write(Y);    //Displaying the value of the decremented variable

window.alert(Math.random()*543);   //Displaying a random number from 0 to 543 in an alert box

window.alert(Math.pow(5,3));    //Displaying 5 to the power of 3 in an alert box




