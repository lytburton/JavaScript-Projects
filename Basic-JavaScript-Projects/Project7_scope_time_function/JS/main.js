//Variable Scope Challenge
var num = 8; //write a global variable

function addNum(){ 
    var num2 = 10; //write a local variable
    return num + num2;
}
console.log(addNum());

function addNums(){ //intentionally write a function with an error
   return num + num2;
}
console.log(addNums());

//Method Challenge
//function with an if statement that utilizes the new Date().getHours() method
function whatTime(){
    if(new Date().getHours() > 19){
        document.getElementById("hours").innerHTML = "Good night!";
    }
    else{ //Write out a document.getElementById() method
        document.getElementById("hours").innerHTML = "Goodday!";
    }
}

//If Statement Assignment
//write your own if statement

function humpDay(){ //checks to see if it is Wednesday and displays response in HTML 
    if (new Date().getDay() == 3){
        document.getElementById("today").innerHTML = "Happy Hump Day!";
    }
    else{
        document.getElementById("today").innerHTML = "Have a great day!";
    }
}

//Else Assignment

function isHydrated(){ //checks to see if number is less than 5 and displays response in HTML
    if(document.getElementById("numOfCups").value < 5){
        document.getElementById("drinkWater").innerHTML = "Try to drink more water today";
    }
    else{ 
        document.getElementById("drinkWater").innerHTML = "Great job drinking water today, keep up the great work!";
    }
}

//Else If Assignment

function time_function(){ //checks the time of day and responds with the appropriate reply in the browser
    var time = new Date().getHours();
    var reply;
    if(time < 12 == time > 0){
        reply = "It's morning!";
    }
    else if(time >= 12 == time < 18){
        reply = "It's afternoon!";
        }
    else{
        reply = "Its' evening!";
    }
    document.getElementById("time_of_day").innerHTML = reply;
}