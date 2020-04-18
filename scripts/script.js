// mealplan app
const mealApp = {}

//api key 
mealApp.key = '92f2d36d20f24e3a9ab1a885dbd56fc4'


//ajax request 
mealApp.getMeals = () => {
    $.ajax({
        url: 'https://api.spoonacular.com/mealplanner/generate',
        method: 'GET',
        dataType: 'json',
        data: {
            apiKey: mealApp.key,
        }
    }).then((meals) => {
        // STATUS_TEST, JQXHR_obj might be our ticket to detecting and ejecting urls that dont work. 

        //full week(object)
        oneweek = meals.week;

        console.log(oneweek)

        for (const dayy in oneweek) {
            // console.log(dayy);
            for (const y in dayy) {
                // console.log(y, 'y')
            }
            console.log(`${dayy}: ${oneweek[dayy]}`);
                    mealApp.displayMeals(meals);

        }


    //    //one day(object) one meal(array of object)
    //     console.log(meals.week.monday.meals[0], 'monday breakfast');
//for each can be written for each day of the week

    //     //one day
        // console.log(meals.week.monday, 'mondayday' );

    })
}




    // landing page greeting user and inviting them to generate a mealplan 
    //brief description on how mealplan app works
    // "get started" button manipulates DOM

    // empty out fieldset and bring in next fieldset
    //on click empty fieldset


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
mealApp.displayMeals = (mealsData) => {
    console.log(mealsData, 'mealsData');
        // respons and status code
    // console.log(JQXHR_obj.status) // <= 400 ERROR else Success
        // if response status code is higher than 399
        //diet

        // const diet

        // //intollerences
        // const exclude
        // // calories 
        // const calories

        // //mealPlan type
        // const timeFrame
    
    }
    
    
    //STEP FOUR
    // requested data formatted into a meal plan that is presented on page
    // with nutritional information for each day that has been generated

mealApp.init = function() {
    console.log('gitinit');
    mealApp.getMeals()

}

$(function(){
    mealApp.init()
});




// step four provides user with the option to shuffle for more recipes, 'save the day' which saves the data for that day locally allows the user to build their own week, and/or print the mealplan

// **STRETCH GOAL** with saving the day the user can also move days around to reorganize their week.