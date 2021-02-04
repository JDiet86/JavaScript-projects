function Ride_Function() {  //Defining a function and naming it
    var Height, Can_ride;   //Defining variables and defining them
    Height=document.getElementById("Height").value;     //Displays the Height value in HTML id "Height"
    Can_ride = (Height<52) ? "You are too short ":"You are tall enough ";   //Defines Height requirement and appropriate responses to input
    document.getElementById("Ride").innerHTML = Can_ride + "to ride. ";     //Displays result of "Can_ride" in HTML element "Ride"
}

function Vote_Function() {      //Defining function and naming it
    var Age, Can_vote;      //Defining and naming variables
    Age=document.getElementById("Age").value;   //Displays the age value in HTML id "Age"
    Can_vote = (Age<18) ? "You are not old enough ":"You are old enough ";  //Defines Age requirement and appropriate responses
    document.getElementById("Vote").innerHTML = Can_vote + "to vote. ";     //Displays result of "Can_vote" in HTML element "Vote"
}

function Vehicle(Make,Model,Year,Color) {  //Defining and naming a function and setting variables
    this.Vehicle_Make=Make;      
    this.Vehicle_Model=Model;   
    this.Vehicle_Year=Year;     
    this.Vehicle_Color=Color;   
}   //Defining relationship between variables and function

var Jack=new Vehicle("Dodge","Viper",2020,"Red");   //Assigning new object to variable Jack
var Emily=new Vehicle("Jeep","Trail Hawk",2019,"White and Black");      //Assigning object to Emily
var Erik=new Vehicle("Ford","Pinto",1971,"Mustard");    //Assigning object to Erik
function myFunction() {     //Defining and naming function to construct object
    document.getElementById("Keywords_and_Constructors").innerHTML =
    " Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;    //Putting the result of the relationship between Erik and object in HTML element "Keywords_and_Constructors"
}

function Videogame(Make,Model,Game) {   //Defining and naming a function and setting variables
    this.Videogame_Make=Make;
    this.Videogame_Model=Model;
    this.Videogame_Game=Game;
}   //Defining relationship between variables and function

var Sean=new Videogame("Microsoft","XBOX","Apex Legends");  //Assigning new object to variable Sean
var James=new Videogame("Sony","PS5","NHL '21");    //Assigning new object to variable James
var Kyra=new Videogame("Nintendo","Switch","Animal Crossing");      //Assigning new object to variable Kyra
function Game() {       //Defining and naming function to construct object
    document.getElementById("New_and_This").innerHTML =
    " Sean has a " + Sean.Videogame_Model + " made by " + Sean.Videogame_Make + 
    " and likes to play " + Sean.Videogame_Game;    //Putting result of relationship between Sean and object in HTML element "New_and_This"
}

function Nested() {     //Defining and naming function
    document.getElementById("Nested_Function").innerHTML=Count()    //Putting result of function "Count" in HTML element "Nested_Function"
    function Count() {      //Defining and naming function
        var Starting_point=101;     //Defining Starting point
        function minus_one() {Starting_point -=1;}  //Nested function to subtract 1 from Starting_point
        minus_one();   
        return Starting_point;  //Returning value of Starting_point minus 1
    }
}
