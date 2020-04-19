// mealplan app
const mealApp = {}

//api key 
mealApp.key = 'cacba147c38b4f0faff0ce178c6edd1f'




// gets user information and sends it to the getMeals function
mealApp.getUserInfo = (userDiet, intolerances, calories, time) => {
    // listen for diet to be selected and assign that to userDiet
    // $('.checkbox-pair').on('click',)

    // listen for intolerances to be selected and assign that to inlosserances

    // listen for callories to be selected and assign that to calories

    // listen for day or week to be selected and assign that to time

    // this calls getMeals and passes all the values on
    mealApp.getMeals(userDiet, intolerances, calories, time)
}


// //ajax request catches user input and generates meal plan with user selections
// mealApp.getMeals = (userDiet, intolerances, calories, time) => {
//     $.ajax({
//         url: 'https://api.spoonacular.com/mealplanner/generate',
//         method: 'GET',
//         dataType: 'json',
//         data: {
//             apiKey: mealApp.key,
//             diet: userDiet,
//             exclude: intolerances,
//             targetCalories: calories,
//             timeFrame: 'week',
//         }
//     }).then((apmeals) => {
    
//         // passes on meals that have been selected 
//         mealApp.displayMeals(meals);
//     })
// }

// this second getMeals was created because our API went down
mealApp.getMeals = (apiDayStructure) => {
    // structure of api response
    // day
    apiDayStructure = {
        meals: [
            {
                cleanTitle: 'I am food name',
                image: 'http://placegoat.com/300/250',
                link: 'spoonacular.com'
            },
            {
                cleanTitle: 'I am food name',
                image: 'http://placegoat.com/300/250',
                link: 'spoonacular.com'
            },
            {
                cleanTitle: 'I am food name',
                image: 'http://placegoat.com/300/250',
                link: 'spoonacular.com'
            }
        ],
        nutrients: {
            calories: 2000,
        }
    }
    // week
    const apiWeekStructure = {
        week: {
            monday: {
                meals: [
                    {
                        cleanTitle: 'I am food name',
                        image: 'http://placegoat.com/300/250',
                        link: 'spoonacular.com'
                    },
                    {
                        cleanTitle: 'I am food name',
                        image: 'http://placegoat.com/300/250',
                        link: 'spoonacular.com'
                    },
                    {
                        cleanTitle: 'I am food name',
                        image: 'http://placegoat.com/300/250',
                        link: 'spoonacular.com'
                    }
                ],
                nutrients: {
                    calories: 2000,
                }
            },
            tuesday: {
                meals: [
                    {
                        cleanTitle: 'I am food name',
                        image: 'http://placegoat.com/300/250',
                        link: 'spoonacular.com'
                    },
                    {
                        cleanTitle: 'I am food name',
                        image: 'http://placegoat.com/300/250',
                        link: 'spoonacular.com'
                    },
                    {
                        cleanTitle: 'I am food name',
                        image: 'http://placegoat.com/300/250',
                        link: 'spoonacular.com'
                    }
                ],
                nutrients: {
                    calories: 2000,
                }
            }

        }
    }
    // console.log(apiDayStructure)
    mealApp.displayMeals(apiDayStructure);
}

//takes the mealplan information, saves it in variables and displays on the page
mealApp.displayMeals = (mealsData) => {
    console.log(mealsData);

    if ('week' in mealsData) {
        for (const [day, meals_day] of Object.entries(mealsData.week)){
            for (i = 0; i <= 2; i++){
                const mealInfo = meals_day.meals[i]
                const title = mealInfo.cleanTitle
                const imageUrl = mealInfo.image
                const link = mealInfo.link
                // const day_calories = meals_day.nutrients.calories
            //     $('.bla').append(`
            //      <div class="food-card">
            //     <div class="food-card__image">
            //         <img src="${imageUrl}" alt="">
            //     </div>
            //     <div class="food-card__text">
            //         <span>${week[meals_day]}</span>
            //         <h4>${title}</h4>
            //         <p>${day_calories}</p>
            //         <a href="${link}">go here for food</a>
            //     </div>
            // </div>
            //     `)
            }
        }
    } else { 
        for(i = 0; i <= 2; i++){
            const mealInfo = mealsData.meals[i]

            const title = mealInfo.cleanTitle
            const imageUrl = mealInfo.image
            const link = mealInfo.link
            const day_calories = mealsData.nutrients.calories;
            console.log(title);
            console.log(imageUrl);
            console.log(link);
            console.log(day_calories);
            $('.bla').append(`
            <div class="food-card">
                <div class="food-card__image">
                    <img src="${imageUrl}" alt="">
                </div>
                <div class="food-card__text">
                    <h4>${title}</h4>
                    <p>${day_calories}</p>
                    <a href="${link}">go here for food</a>
                </div>
            </div>
                `)
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