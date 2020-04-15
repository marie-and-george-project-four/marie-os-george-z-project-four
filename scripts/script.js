// mealplan app
const mealApp = {}
    // landing page greeting user and inviting them to generate a mealplan 
    //brief description on how mealplan app works
    // "get started" button manipulates DOM
    // empty out fieldset and bring in next fieldset



mealApp.init = function() {

}

$(function(){
    mealApp.init()
});



// STEP ONE
// check boxes to select which diet the user follows
// store selected diet in a varriable 
// values captured from checks are values for "diet" parameter and it takes strings

// next button empties out fieldset and brings inthe next fieldset

//STEP TWO
//checkboxes to select any food intollerances >> nuts, dairy, etc
// values captured from step two correlate with exclude parameter also takes strings


// next button empties out fieldset and brings inthe next fieldset

//STEP THREE
// select input correlates with targetCalories takes numbers
// once selection is made from tagetCalories 
// Append radio buttons "plan for day" /"plan for week" correlate with timeFrame parameter takes a string



//selected mealplan is saved in a variable 
    // title, link, image pulled from API & appended to dom
    // all the variables collected are inputed into an AJAX request 


//STEP FOUR
// requested data formatted into a meal plan that is presented on page
// with nutritional information for each day that has been generated

// step four provides user with the option to shuffle for more recipes, 'save the day' which saves the data for that day locally allows the user to build their own week, and/or print the mealplan

// **STRETCH GOAL** with saving the day the user can also move days around to reorganize their week.