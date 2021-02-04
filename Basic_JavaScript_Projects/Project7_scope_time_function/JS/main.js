//Global variable

var X = 15      //Defining and named variable
function Compare() {        //Defining and naming function
    document.write(X>9);    
}

function Add() {        //Defining and naming function
    document.write(X+24);
}
Compare();      //Running "Compare" in browser
document.write("<br>");     //Line break
Add();      //Running "Add" in browser
document.write("<br>");     //Line break


//Local variable

function Subtract() {       //Defining and naming function
    var Y=24;   //Defining and named variable
document.write(Y-13);
}
Subtract();     //Running "Subtract" in browser
document.write("<br>");

//Intentional error to debug in console log

function Compare2() {   //Defining and naming function
    var Z = "Cat"       //Defining and naming variable
    console.log(Z=="Cat");      //Result will show in console log
}

function Compare3() {   //Defining and naming function
    console.log(Z=="Dog");      //Result will show in console log
}
Compare2();     //Running "Compare2" in console log
Compare3();     //Running "Compare3" to look for "not defined" in console log

function get_Date() {   //Defining and naming a function
    if (new Date().getHours()>12)  {    //Running "if" to check if it is after 12pm
        document.getElementById("Lunch?").innerHTML="It's time for lunch!";     //Putting response if after 12pm into HTML element "Lunch?" if before 12pm, nothing is displayed
    }
}



function Own_if() {     //Defining and naming a function
    var A=10
    var B=5
    var C=15            //Defining and naming variables
    if (A+B==C) {       //"if" statement and expression
        document.getElementById("Equal").innerHTML="The sum of A and B is equal to C!";     //if expression is true, displaying text in HTML element "Equal"
    }
}

function Math1() {      //Defining and naming a function
    Answer=document.getElementById("Answer").value;     //Putting value into HTML element "Answer"      
    if (Answer == 112) {        //
        Check="You got the answer right!";      //What will display if the correct answer is given
    }
    else {
        Check="That is incorrect.  Please try again!";      //What will display if the incorrect answer is given
    }
    document.getElementById("Your_Answer").innerHTML = Check;       //Putting the result of "Check" into HTML element "Your_Answer"
}

function Time_function()    {   //Defining and naming a function
    var Time = new Date().getHours();   //Naming variable and getting the hour of the day
    var Reply;      //Names variable depending on time of day
    if (Time < 12 == Time > 0)  {
        Reply = "It is morning time!";  //Creates response if between 12am and 12pm
    }
    else if (Time > 12 == Time <18) {
        Reply = "It is the afernoon.";  //Creates response if between 12pm and 6pm
    }
    else {
        Reply = "It is evening time.";  //Creates response if between 6pm and 12am
    }
    document.getElementById("Time_of_day").innerHTML=Reply;     //Puts applicable response in HTML element "Time_of_Day"
}




