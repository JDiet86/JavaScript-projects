function count_to_ten() {  //Function to count to ten
    var digit = ""; //Defining variable "digit"
    var X = 1;  //Defining variable X, starting point to 1  
    while (X < 11) {    //Setting parameter for loop
        digit += "<br>" + X;    //Sets addition operator, adds line break for each iteration
        X++;    //Sets increment value to 1
    }
    document.getElementById("counting_to_ten").innerHTML = digit;   //displays result in HTML element "counting_to_ten"
}

function str_length() { //Function to determine string length
    var str = "JavaScript"; //Defines string that will have its length displayed
    var n = str.length;
    document.getElementById("string_length").innerHTML = n;
}

var instruments = ["Banjo", "Violin", "Keyboard", "Saxophone", "Harmonica"];    //defining variable instruments and paramaters
var content = ""; //defining variable content
function for_loop() {   //defining and naming for_loop function
    for (Y = 0; Y < instruments.length; Y++) {  //defines condition that if Y is less than the amount of instruments, continue the loop
    content += instruments [Y] + "<br>";    //Executed as long as condition is true
    } 
    document.getElementById("list_of_instruments").innerHTML = content; //displays result in HTML element "list_of_instruments"
}

function array_function() {     
    var transportation = []  //defining and naming variable and array
    transportation[0] = "driving";
    transportation[1] = "flying";
    transportation[2] = "skateboarding";
    transportation[3] = "skating";      //assigining elements to array
    document.getElementById("array").innerHTML = "This mode of transportation is " + 
        transportation[1] + ".";  //displaying result of element in index 1 of array into HTML element
}

function constant_function() {  
    const house = {style:"bungalow", location:"Portland", color: "blue"};
    house.color = "green";  //Changing house color
    house.date = "1970";    //Adding date house was built
    document.getElementById("constant").innerHTML = "This house is a " + house.color + "&nbsp" + house.style +
        " and is located in " + house.location + "." + " The house was bult in " + house.date;      //displaying result in HTML elment
}

var z = "apple"   //naming variable to show how scope works
function let_keyword() {
    let z = "banana";   //naming variable to be desplayed to show scope
    document.getElementById("let").innerHTML = z;   //displaying result in HTML
}

function return_statement(z) {      //naming function and assigning variable z above to it
    return z + "sauce";     //returning "applesauce"
}
document.getElementById("applesauce").innerHTML = return_statement(z); //displaying "applesauce in HTML"

let car = {
    make: "VW",
    model: "Golf",
    year: "2011",
    color: "grey",
    description : function() {
        return "The car is a " + this.color +"&nbsp"+  this.year +"&nbsp"+ this.make +"&nbsp" + this.model + ".";
    }
}
document.getElementById("car_object").innerHTML = car.description();



