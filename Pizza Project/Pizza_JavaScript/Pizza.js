function getReceipt(){
    //This initializes our string so it can get passed from
    //function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    //this is the base price based on the size ordered
    var sizeTotal = 0;
    //checks to see if a pizza size is selected, if so it prints the size ordered
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++){
        if(sizeArray[i].checked){
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    } //this assigns number values which are the prices for each size pizza
    if (selectedSize === "Personal Pizza"){
        sizeTotal = 6;
    }else if(selectedSize === "Small Pizza"){
        sizeTotal = 8;
    }else if(selectedSize === "Medium Pizza"){
        sizeTotal = 10;
    }else if(selectedSize === "Large Pizza"){
        sizeTotal = 14;
    }else if(selectedSize === "Extra Large Pizza"){
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    //the console will display specific data about the purchase price
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    //these variables will get passed on to each function
    getTopping(runningTotal, text1);
};


//this adds toppings to the order and adds adjusts the price per topping
function getTopping(runningTotal,text1){
    var toppingTotal = 0;
    //this array will hold the toppings selected
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    //checks to see if any toppings are selected and adds checked toppings
    //to the selectedTopping array and order list
    for (var j = 0; j < toppingArray.length; j++){
        if(toppingArray[j].checked){
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }
    //this adjusts the price of the pizza to include 1 free topping
    var toppingCount = selectedTopping.length;
    if(toppingCount > 1){
        toppingTotal = (toppingCount -1);
    }else{
        toppingTotal = 0;
    }
    //this is the total cost of the order including pizza size and toppings
    //prices with 1 topping free
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + "topping -1 free topping = " + toppingTotal + ".00");
    console.log("topping text1: "+ text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" +
        runningTotal + ".00" + "</strong></h3>";
};