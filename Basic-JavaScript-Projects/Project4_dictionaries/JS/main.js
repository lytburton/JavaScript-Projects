function food_dictionary() { //contains a dictionary of some of my favorite foods
    var favMeal = {
        starter: "fresh green salad",
        mainCourse: "cajun chicken pasta",
        dessert: "strawberry cheesecake",
        drink: "red wine"
    };
    // prints the selected KVP to the HTML document
    document.getElementById("dictionary").innerHTML = favMeal.mainCourse;
}

function herb_dictionary(){ //contains a dictionary of herb names
    var herbs = {
        herb_1: "basil",
        herb_2: "thyme",
        herb_3: "oregano",
        herb_4: "sage",
        herb_5: "mint"
    };
    // deletes herb_3 from herb_dictionary
    delete herbs.herb_3;
    //attempts to print selected KVP to the HTML document - will result in 'undefined' output 
    document.getElementById("new_dictionary").innerHTML = herbs.herb_3;
}
