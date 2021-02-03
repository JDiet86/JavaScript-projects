function my_Dictionary() {  //Defining a function and naming it
    var Animal = {      //Defining a variable and naming it 
        Species: "Dog",     //Defining Key-Value Pair
        Color: "Black",      //Defining Key-Value Pair
        Breed: "Labrador",   //Defining Key-Value Pair
        Age:5,               //Defining Key-Value Pair
        Sound:"Bark",        //Defining Key-Value Pair
    };
    
    document.getElementById("Dictionary").innerHTML=Animal.Sound;  //Putting the value of result into HTML element named "Dictionary"
}

function my2_Dictionary() {     //Defining a function and naming it
    var Writing_Utensil = {     //Defining a variable and naming it  
        Type: "Marker",     //Defining Key-Value Pair
        Brand: "Crayola",   //Defining Key-Value Pair
        Color: "Red",       //Defining Key-Value Pair
        Action: "Color",    //Defining Key-Value Pair
    };
    delete Writing_Utensil.Action;      //Removing the "Action" key from Dictionary
    document.getElementById("Dictionary2").innerHTML=Writing_Utensil.Action;  //Putting the value of result into HTML element named "Dictionary2"
                                                                              //Will display as undefined because I deleted the "Action" key from the dictionary
}