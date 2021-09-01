
//utilizes the concat() method to connect two strings
function completeSentence(){
    var begin = "This is the ";
    var end = "whole sentence.";
    var completed = begin.concat(end);
    document.getElementById("message").innerHTML = completed;
}

//write a slice() method that displays a section of a string
function slicer(){
    var sentence = document.getElementById("slice").textContent;
    var separate = sentence.slice(43,74);
    document.getElementById("slice").innerHTML = separate;
}

//write and execute the toUpperCase() method
var lower = "<br>" + "This is a sign ";
document.write(lower.toUpperCase());

//write and execute the search() method
var seek = "Seek and ye shall find ";
document.write(seek.search("find"));

//utilize the toString() method to return a number as a string
function numToString(){
    var num = 300;
    document.getElementById("numString").innerHTML = num.toString();
}

//utilize the toPrecision() method to return a string as a number of a specified length
function shortNum(){
    var num = 1234567.890;
    document.getElementById("precision").innerHTML = num.toPrecision(8);
}

//write and execute the toFixed() method
var fix = 76;
document.write("<br>" + fix.toFixed(1));

//write and execute the valueOf() method
var value = 76;
document.write("<br>" + value.valueOf());