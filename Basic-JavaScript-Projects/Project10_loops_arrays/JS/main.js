

//Write a function that utilizes a while loop
function call_loop(){
    var loop = 0;
    var sentence = "";
    while(loop < 6){
       sentence += "<br>The number is " + loop;
        loop++;
         
    }document.getElementById("loop").innerHTML = sentence;
}


//Write a function that utilizes .length
function what_length(){
    var str = document.getElementById("length").textContent;
    document.getElementById("length").innerHTML = str.length;
}

//Write a function that utilizes a for loop
function for_loop(){
    var instruments = ["Guitar", "Piano", "Drums", "Clarinet", "Flute", "Trumpet"];
    var list = "";
    var i = 0;

    for(i = 0; i < instruments.length; i++){
        list +=  "<br> I like the " + instruments[i];
        document.getElementById("List_of_Instruments").innerHTML = list;
    }
}

//Write a function that utilizes an array

function array_Function(){
    var sneakers = ["Nike", "Adidas", "Reebok", "Fila", "Puma"];
    var i = 0;
    var mySneakers = "";
    for(i = 0; i < sneakers.length; i++){
        mySneakers += sneakers[i] + "<br>";
    } document.getElementById("Array").innerHTML = mySneakers;
}


//Write a function that utilizes the const keyword

const coffee = {color:"black", source:"Ethiopia",sweetener:"sugar", vessel:"mug", flavor:"delicious"};

coffee.vessel = "thermos";
coffee.temp = "105 degrees fahrenheit";

 function Constant_Function(){
    document.getElementById("constant").innerHTML = "I am drinking " + coffee.color + " coffee from " +
    coffee.source + " in my " + coffee.vessel + " at " + coffee.temp + " sweetened with " 
    + coffee.sweetener + ", and it is " + coffee.flavor + ".";

 }

// utilize the let keyword
  {
    let eight = 8;  
    document.write(eight);
  }

  //write and execute the return statement in the browser
  function sayHi(){
      var hello = "Hi!";
      return hello;
  }
  document.write("<br>" + sayHi());


function some_things(){
    let things = {  //create an object using the let keyword
        thing_1: "hat",
        thing_2: "table",
        thing_3: "envelope",
        thing_4: "computer",
        thing_5: "box"
    }
    document.getElementById("things").innerHTML = "Please give me the " + things.thing_3;
}

//Write a loop that includes at least one break statement
function gimme_five(){
    var i = 0;
    var nums = [];
    for(i = 0; i < 10; i++){
        if(i === 6){
            break;
        }
        nums += i + " ";
        document.getElementById("five").innerHTML = nums;
    }
}

//Write a loop that includes at least one continue statement

function skip_ten(){
    var i = 0;
    var nums = [];
    for(i = 0; i < 12; i++){
        if(i === 10){
            continue;
        }
        nums += i + " ";
        document.getElementById("ten").innerHTML = nums;
    }
}
