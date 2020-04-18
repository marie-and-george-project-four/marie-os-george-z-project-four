// mealplan app
const mealApp = {}

//api key 
mealApp.key = 'cacba147c38b4f0faff0ce178c6edd1f'


// gets user information and sends it to the getMeals function
mealApp.getUserInfo = (userDiet, intollerances, calories, time) => {
    // listen for diet to be selected and assign that to userDiet
    // $('.checkbox-pair').on('click',)

    // listen for intollerances to be selected and assign that to inlosserances

    // listen for callories to be selected and assign that to calories

    // listen for day or week to be selected and assign that to time

    // this calls getMeals and passes all the values on
    mealApp.getMeals(userDiet, intollerances, calories, time)
}


//ajax request catches user input and generates meal plan with user selections
mealApp.getMeals = (userDiet, intollerances, calories, time) => {
    $.ajax({
        url: 'https://api.spoonacular.com/mealplanner/generate',
        method: 'GET',
        dataType: 'json',
        data: {
            apiKey: mealApp.key,
            diet: userDiet,
            exclude: intollerances,
            targetCalories: calories,
            timeFrame: "day",
        }
    }).then((meals) => {
    
        // passes on meals that have been selected 
        mealApp.displayMeals(meals);
    })
}

//takes the mealplan information, saves it in variables and displays on the page
mealApp.displayMeals = (mealsData) => {

    // for (key in mealsData.week) {
    //     meals_of_day = mealsData.week[key]
    // }
    if ('week' in mealsData) {
        for (const [day, meals_day] of Object.entries(mealsData.week)){
            for (i = 0; i <= 2; i++){
                const mealInfo = meals_day.meals[i]
                const title = mealInfo.cleanTitle
                const imageUrl = mealInfo.image
                const link = mealInfo.link
                // $('').append()
            }
        }

        // each day is an object(monday, tuseday, wednesday, etc) with meals = an array
            // in the array there are 3 items(nodes?)
                // in the item we need to target cleanTitle, image, link
        //nutrients = is an object
            // calories = keyvaluepair to target
        //append all of to  .food-card

    } else { 
        // console.log(mealsData);
        for(i = 0; i <= 2; i++){
            const mealInfo = mealsData.meals[i]
            const title = mealInfo.cleanTitle
            const imageUrl = mealInfo.image
            const link = mealInfo.link
        }
        // if time === day
        // meals = an array so loop or for each
            // in the array there are 3 items(nodes?)
                // in the item we need to target cleanTitle, image, link
        //nutrients = is an object
            // calories = keyvaluepair to target
        //append all of to  .food-card

    }

}


mealApp.init = function() {
    console.log('gitinit');
    mealApp.getUserInfo();
    
}

//document ready
$(function () {
    mealApp.init();
});