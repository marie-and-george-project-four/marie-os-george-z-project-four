// mealplan app
const mealApp = {}

//api key 
mealApp.key = 'cacba147c38b4f0faff0ce178c6edd1f'


const formStages = [
    "form__stage--step-one",
    "form__stage--step-two",
    "form__stage--step-three",
    "form__stage--step-four",
]
let formState = 0



mealApp.quizNavigation = () => {
    $(document).bind('keydown', function (e) {
        const keycode = (event.keyCode ? event.keyCode : event.which);
        if (e.keyCode == 13) {
            if (formState === 0) {
                $('#get-started').trigger('click');
            } else if (formState === 3) { 
                jquery_str = '.' + formStages[formState] + ' > .stage__container--step-four > .stage__buttons > .submit'
                $(jquery_str).trigger('click');
            } else {
                jquery_str = '.' + formStages[formState] + ' > .stage__buttons > .next'
                $(jquery_str).trigger('click');
            } 
        }
    });

    $('#get-started').on('click', function(){
        formState = formState + 1
        const $currentFormStage = $(this).parent();
        const $nextFormStage = $(this).parent().next();
        $nextFormStage.show();
        $currentFormStage.hide();
    });

    $('.back').on('click', function(){
        formState = formState - 1

        const $currentFormStage = $(this).parents('.form__stage');
        const $prevFormStage = $(this).parents('.form__stage').prev();
        $prevFormStage.show();
        $currentFormStage.hide();
    });

    // next button
    $('.next').on('click', function(){
        formState = formState + 1

        const $currentFormStage = $(this).parents('.form__stage');
        const $nextFormStage = $(this).parents('.form__stage').next();
        $nextFormStage.show();
        $currentFormStage.hide();
    });

    $(".daily-calories__select").on('change', function () {
      $(".duration__container").css("visibility", "visible");
    });

    $(".submit").on("click", function () {
      const $currentFormStage = $(this).parents(".quiz-section");
      const $nextFormStage = $(this).parents(".quiz-section").next();
      $nextFormStage.show();
      $currentFormStage.hide();
    });
}



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
mealApp.getMeals = (apiWeekStructure) => {
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
    apiWeekStructure = {
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
    
    mealApp.displayMeals(apiWeekStructure);
}
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
                $(".results-section__recipes").append(`
                <div class="recipes__recipe-card">
                    <div class="recipe-card__image">
                        <img src="https://spoonacular.com/recipeImages/${id}-636x393.jpg" alt="">
                    </div>
                    <div class="recipe-card__description">
                        <h3 class="main-header main-header--recipe">${title}</h3>
                        <a href="${link}" class="main-paragraph main-paragraph--external-link">Check out the full recipe now</a>
                    </div>
                </div> 
            `);
            }
        }
    } else { 
        for(i = 0; i <= 2; i++){
            const mealInfo = mealsData.meals[i]
            const id = mealInfo.id
            const title = mealInfo.title
            const link = mealInfo.sourceUrl
            const day_calories = mealsData.nutrients.calories;
                $(".results-section__recipes").append(`
                <div class="recipes__recipe-card">
                    <div class="recipe-card__image">
                        <img src="https://spoonacular.com/recipeImages/${id}-636x393.jpg" alt="">
                    </div>
                    <div class="recipe-card__description">
                        <h3 class="main-header main-header--recipe">${title}</h3>
                        <a href="${link}" class="main-paragraph main-paragraph--external-link">Check out the full recipe now</a>
                    </div>
                </div> 
            `);
        }
    }
}


mealApp.init = function() {
    console.log('gitinit');
    mealApp.quizNavigation();
    mealApp.getUserInfo();
}

//document ready
$(function () {
    mealApp.init();
});