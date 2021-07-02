const categorytitle = document.getElementById('foodcategorytitle');
const categorygallery = document.getElementById('foodgallery');
const categorydiscription = document.getElementById('fooddiscription');
const searchbutton = document.getElementById('searchButton');
const searchbar = document.getElementById('searhMealBar');
const shufflebutton = document.getElementById('shuffle');
const submit = document.getElementById('submit');

function mealnamefetch(e) {
    e.preventDefault();
    const foodSelection = searchbar.value;
    categorygallery.innerHTML="";
    categorydiscription.innerHTML='';
    if (foodSelection) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodSelection}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // console.log(data.meals.map(meal=>console.log(meal.strMeal)));


                if (data.meals === null) {
                    categorytitle.innerHTML = `<p>your ${foodSelection} category we can't recognize </P>`

                }
                else {
                    categorygallery.innerHTML = data.meals.map(meal => `
                    <div class="meals">
                        <img src="${meal.strMealThumb}" alt="${meal.strCategory}"/>
                        <div class="meal-info" data-mealID="${meal.idMeal}">
                            <h3>${meal.strMeal}</h3>   
                        </div>
                    </div>
                `)
                .join('');
                }

            })

        categorytitle.innerHTML = `<h2>you are selected this ${foodSelection} Category</h2>`;
    }
    else {
        alert(`Please enter food categories`);
    }
    // search clear
    searchbar.value="";
}

fetchdiscription=(mealid)=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
    .then(res=>res.json())
    .then(data=>{
        const meal=data.meals[0];
        console.log(meal);
        ingredient(meal);
    })
}

ingredient=(meal)=>{
    const foodingredient=[];
    for(let i=1; i<=20; i++){
        if(meal[`strIngredient${i}`]){
            foodingredient.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
            
        }
        else{
            break;
        }
    };
    categorygallery.innerHTML='';
    categorydiscription.innerHTML=`
    <div class="selected-meal">
        <div class="selected-food-img">
            <h2>${meal.strMeal}</h2>
            <img src="${meal.strMealThumb}"/>
        </div>
        <div class="food-ingredient-conatiner">
            <h2>Ingredients</h2>
            <ol class="ingredient-list">
                ${foodingredient.map(meals=>`<li>${meals}</li>`).join('')}
            </ol>
        </div>
    </div>
    <div class="food-information">
        ${meal.strCategory ? `<p class="info">Its made by : ${meal.strCategory}</p>` : ''};
        ${meal.strArea ? `<p class="info">First Introduce by : ${meal.strArea}</p>` : ''};
        ${meal.strInstructions ? `<p class="info"><strong>Indtruction :</strong> ${meal.strInstructions}</p>` : ''};
        
    </div>
    `;

}

submit.addEventListener('submit', mealnamefetch);
categorygallery.addEventListener('click',e=>{
    const containerpath=e.path.find(item=>{
        if(item.classList){
            return item.classList.contains('meal-info');
        }
        else{
            return false
        }
    });
    // console.log(containerpath);
    if(containerpath){
        const mealId=containerpath.getAttribute('data-mealID');
        fetchdiscription(mealId);
    }
});


