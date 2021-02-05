function Add() {    //Defining and naming function
    var First = "7 + ";
    var Second = "6  +";
    var Third= " 32 - ";
    var Fourth="2 = ? ";    //Defining and naming values to concatenate
    var full_expression = First.concat(Second,Third,Fourth);    //Indicating which variables to concatenate
    document.getElementById("Concatenate").innerHTML = full_expression; //Putting result in HTML element "Concatenate"
}

function Fruit_slice() {    //Defining and naming function
    var Fruits="Apple, Orange, Banana, Strawberry, Spinach";    //Defining variables
    var Section=Fruits.slice(0,33);     //Slicing Spinach out
    document.getElementById("Slice").innerHTML = Section;   //Putting the result in HTML element "slice"
}

function Upper_case()  {    //Defining and naming function
    var str = "good morning!";  
    var res = str.toUpperCase();    //Capitalizing variable "str"
    document.getElementById("Upper").innerHTML = res;   //Putting result in HTML element "Upper"
}

function Search_for() { //Defining and naming function
    var str = "Where's Waldo?";     
    var find= str.search("Waldo");  //Searching for first character that "Waldo" appears in variable "str"
    document.getElementById("Search").innerHTML = find;     //Putting result in HTML element "search"
}

function Num_str()  {   //Defining and naming function
    var num=5679;   //Defining and naming a variable
    document.getElementById("Num2str").innerHTML = num.toString(); //Showing variable "num" as a string in HTML element "Num2str"
}

function precise()  {   //Defining and naming function
    var Y=1239875.214568545412398;  //Defining and naming variable
    document.getElementById("Precision").innerHTML = Y.toPrecision(15);     //Defining how many characters to show in variable "Y" and putting result in HTML element "Precision"
}

function fix()  {   //Defining and naming function
    var X = 27.32675;   //Defining and naming variable
    document.getElementById("Num2fix").innerHTML = X.toFixed(4);    //Converting variable "X" into fixed number and putting result in HTML element "Num2fix" 
}

function Value_of() {   //Defining and naming function
    var string= ("Hi Mom!");    //Defining and naming a variable
    var res=string.valueOf()    //Function to show primitive value of variable "string"
    document.getElementById("value").innerHTML = res;   //Putting result into HTML element "value"
}