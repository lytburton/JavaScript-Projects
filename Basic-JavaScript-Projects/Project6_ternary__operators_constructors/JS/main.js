function Ride_Function(){
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("ride").innerHTML = Can_Ride + " to ride";
}

//Ternary Operators Voting Program Challenge
function canVote(){ //checks to see if age is greater than 18 and responds based on user input
    var age, old_enough;
    age = document.getElementById("age").value;
    old_enough = (age < 18) ? "You are not old enough to vote.":"You can vote!";
    document.getElementById("voteResults").innerHTML = old_enough;
}

//using keywords and constructors
function Vehicle(Make, Model, Year, Color){ //establishes the vehicle object and its features
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //created new instances of the vehicle object
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction(){ //displays the results of the constructor function in HTML
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;

    }

//New Keyword Object Challenge

function Person(Name, Age, City){ //establishes the Person object and its features
    this.Person_name = Name;
    this.Person_age = Age;
    this.Person_city = City;
}

var Person1 = new Person("Shannon Johnson", 28, "Miami"); //establishes the Person object and its features
var Person2 = new Person("John Jacobs", 39, "Seattle");
var Person3 = new Person("James Parker", 80, "San Antonio");

function myPerson(){ //displays the results of the constructor function in HTML
    document.getElementById("New_and_This").innerHTML = 
    "Hi, my name is " + Person1.Person_name + ". I live in "+ Person1.Person_city +
    ", and I am " + Person1.Person_age + " years old.";
}

//Nested Function Assignment

function peoplePresent(){ //keeps count of the number of people present and displays the result in HTML
    document.getElementById("Nested_Function").innerHTML = count();
    function count(){
        var people = 0;
        function addPerson(){people += 1;}
        addPerson();
        return people;
    }
}