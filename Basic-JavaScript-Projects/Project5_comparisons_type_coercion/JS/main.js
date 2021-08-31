//prints the type of operator
document.write(typeof false);

//prints the result of an expression using type coercion
document.write("32" + 32);


function notNumber(){
    var num = 0;
    document.getElementById("test").innerHTML = 0/num; //prints a result that is not a number
    
}

function notNum(){
    var notNum = "right on!"
    //checks if input is a number and prints the results - should return true
    document.getElementById("test_2").innerHTML = isNaN(notNum);
}

function isNum(){
    var num = 0;
    //checks if input is a number and prints the results - should return false
    document.getElementById("test_3").innerHTML = isNaN(num);
}

function infinite(){ //prints infinity
    var forever = 2E309;
    document.getElementById("largest").innerHTML = forever;
}

function neg_infinite(){ // prints negative infinity
    var neg_forever = -4E322;
    document.getElementById("smallest").innerHTML = neg_forever;
}

document.write(7 > 3); //returns true
document.write([3 < 4] && [8 > 9]); //returns false

console.log(4 + 4); //display data in the console
console.log(6 > 14); //display false result using boolean logic

document.write(30 == (6*5)); //prints 'true' result using == operator
document.write(7 == 9); //prints 'false' result using == operator

//Return true by ensuring to match the data type and value
var price_1 = 15;
var price_2 = 15;
document.write(price_1 === price_2);

//Return false by writing a different data type and different value
var price_3 = "16";
document.write(price_2 === price_3);

//Return false by writing a different data type but the same value for both
var price_4 = 16;
document.write(price_3 === price_4);

//Return false by writing the same data type but a different value for both
document.write(price_1 === price_4);

//utilize the AND operator to display true
document.write(price_1 == price_2 && price_4 > price_2);
//utilize the AND operator to display false
document.write(price_1 == price_2 && price_4 < price_2);
//utilize the OR operator to display true
document.write(price_1 == price_2 || price_4 < price_2);
//utilize the OR operator to display false
document.write(price_1 > price_2 || price_4 < price_2);

//utilize the NOT operator to display true
document.write(!(price_1 > price_2));
//utilize the NOT operator to display false
document.write(!(price_1 == price_2));