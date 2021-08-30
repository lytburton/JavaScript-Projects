function addition(){ //adds 3 + 5 and gives the results of the operation
    var add = 3 + 5;
    document.getElementById("adding").innerHTML = "3 + 5 = " + add;
}

function subtraction(){ //subtracts 5 from 6 and gives the results of the operation
    var subtract = 6 - 5;
    document.getElementById("subtracting").innerHTML = "6 - 5 = " + subtract;
}

function multiplication(){ //multiplies 4 by 9 and gives the results of the operation
    var multiply = 4 * 9;
    document.getElementById("multiplying").innerHTML = "4 x 9 = " + multiply;
}

function division(){ //divides 8 by 2 and gives the results of the operation
    var divide = 8 / 2;
    document.getElementById("dividing").innerHTML = "8 / 2 = " + divide;
}

function math(){ //does multiple operations at once and gives the results
    var doMath = 3 * 10 / (20 - 13) + 27;
    document.getElementById("moreMath").innerHTML = " 3 times 10, divided by the difference of 20 minus 13, plus 27 equals " + doMath;
}

function remainder(){ //gives the remainder of 77 divided by 4
    var mod = 77 % 4;
    document.getElementById("remaining").innerHTML = "When you divide 77 by 4, the remainder is " + mod;
}

function negator(){ //gives the negative form of 89
    var negate = 89;
    document.getElementById("negating").innerHTML = -negate;
}

var increase = 35; //increments the number 35 by one and prints the results
increase++;
document.write(increase + " ");

var decrease = 35; //decrements the number 35 by one and prints the results
decrease--;
document.write(decrease + " ");

//opens a pop up window that gives a random number between 0 and 33 rounded to the nearest integer
window.alert("Today's lucky number is " + Math.round(Math.random() * 33)); 

//takes a number with several decimal points and rounds it up
document.write(" 83.34934932 is rounded up to " + Math.ceil(83.34934932));

