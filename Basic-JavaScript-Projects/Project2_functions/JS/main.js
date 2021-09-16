function sayGoodbye(){ //this function changes the paragraph text and increases its font size when a button is pushed
    var goodbye = "Goodbye!";
    var bigGoodbye = goodbye.fontsize("30px");
    document.getElementById("greet").innerHTML = bigGoodbye;
}

function sentence(){ //this function changes the paragraph text to a concatenated string when it is hovered over 
    var songs = "Which songs do you enjoy";
    var bestSongs = songs += " the most?";
    document.getElementById("concatenate").innerHTML = bestSongs;
}

function capitalize(){
    var upper = "uppercase";
    var upper = upper.toUpperCase();
    document.getElementById("lower").innerHTML = upper;
}