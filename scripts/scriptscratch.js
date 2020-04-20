// mealplan app
const mealApp = {}

//api key 
mealApp.key = 'cacba147c38b4f0faff0ce178c6edd1f'







// gets user information and sends it to the getMeals function
mealApp.getUserInfo = (userDiet, intolerances, calories, duration) => {
    // listen for diet to be selected and assign that to userDiet
    
    $('.submit').on('click', function() {
        userDiet = [];

        $('input[name="diet-style[]"]:checked').each(function(){
            userDiet.push($(this).val())
        })

        intolerances = [];
        
        $('input[name="intolerance[]"]:checked').each(function(){
            intolerances.push($(this).val())
        })
        

        calories = $('option:selected').val();

        duration = $('input[name="diet-length"]:checked').val();
        
        mealApp.getMeals(userDiet, intolerances, calories, duration);
    });
}


// //ajax request catches user input and generates meal plan with user selections
// mealApp.getMeals = (userDiet, intolerances, calories, duration) => {
//     $.ajax({
//         url: 'https://api.spoonacular.com/mealplanner/generate',
//         method: 'GET',
//         dataType: 'json',
//         data: {
//             apiKey: mealApp.key,
//             diet: userDiet.toString(),
//             exclude: intolerances.toString(),
//             targetCalories: calories,
//             timeFrame: duration,
//         }
//     }).then((meals) => {
//         console.log(meals)

//         // passes on meals that have been selected 
//         mealApp.displayMeals(meals);
//     })
// }
// end of AJAX request
// start of dummy code
// this second getMeals was created because our API went down
// it is our dummy code for testing non API related functions
// mealApp.getMeals = (apiWeekStructure) => {
//     // structure of api response
//     // day
//     apiDayStructure = {
//         meals: [
//             {
//                 cleanTitle: 'I am food name',
//                 image: 'http://placegoat.com/300/250',
//                 link: 'spoonacular.com'
//             },
//             {
//                 cleanTitle: 'I am food name',
//                 image: 'http://placegoat.com/300/250',
//                 link: 'spoonacular.com'
//             },
//             {
//                 cleanTitle: 'I am food name',
//                 image: 'http://placegoat.com/300/250',
//                 link: 'spoonacular.com'
//             }
//         ],
//         nutrients: {
//             calories: 2000,
//         }
//     }
//     // week
//     apiWeekStructure = {
//         week: {
//             monday: {
//                 meals: [
//                     {
//                         cleanTitle: 'I am food name',
//                         image: 'http://placegoat.com/300/250',
//                         link: 'spoonacular.com'
//                     },
//                     {
//                         cleanTitle: 'I am food name',
//                         image: 'http://placegoat.com/300/250',
//                         link: 'spoonacular.com'
//                     },
//                     {
//                         cleanTitle: 'I am food name',
//                         image: 'http://placegoat.com/300/250',
//                         link: 'spoonacular.com'
//                     }
//                 ],
//                 nutrients: {
//                     calories: 2000,
//                 }
//             },
//             tuesday: {
//                 meals: [
//                     {
//                         cleanTitle: 'I am food name',
//                         image: 'http://placegoat.com/300/250',
//                         link: 'spoonacular.com'
//                     },
//                     {
//                         cleanTitle: 'I am food name',
//                         image: 'http://placegoat.com/300/250',
//                         link: 'spoonacular.com'
//                     },
//                     {
//                         cleanTitle: 'I am food name',
//                         image: 'http://placegoat.com/300/250',
//                         link: 'spoonacular.com'
//                     }
//                 ],
//                 nutrients: {
//                     calories: 2000,
//                 }
//             }

//         }
//     }
    
//     mealApp.displayMeals(apiWeekStructure);
// }
// end of dummy code

//takes the mealplan information, saves it in variables and displays on the page
mealApp.displayMeals = (mealsData) => {
    console.log(mealsData);
    if ('week' in mealsData) {
        for (const [day, meals_day] of Object.entries(mealsData.week)){
            for (i = 0; i <= 2; i++){
                const mealInfo = meals_day.meals[i]
                const id = mealInfo.id
                const title = mealInfo.title
                const link = mealInfo.sourceUrl
                const day_calories = meals_day.nutrients.calories
                $('.bla').append(`
                <div class="food-card">
                <div class="food-card__image">
                    <img src="https://spoonacular.com/recipeImages/${id}-556x370.jpg" alt="">
                </div>
                <div class="food-card__text">
                    <h4>${title}</h4>
                    <a href="${link}">go here for food</a>
                </div>
            </div>
            `)
            }
        }
    } else { 
        for(i = 0; i <= 2; i++){
            const mealInfo = mealsData.meals[i]
            const id = mealInfo.id
            const title = mealInfo.title
            const link = mealInfo.sourceUrl
            const day_calories = mealsData.nutrients.calories;
            $('.bla').append(`
            <div class="food-card">
                <div class="food-card__image">
                    <img src="https://spoonacular.com/recipeImages/${id}-556x370.jpg" alt="">
                </div>
                <div class="food-card__text">
                    <h4>${title}</h4>
                    <a href="${link}">go here for food</a>
                </div>
            </div>
                `)
        }
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