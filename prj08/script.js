const categorytitle = document.getElementById('foodcategorytitle');
const categorygallery = document.getElementById('foodgallery');
const categorydiscription = document.getElementById('fooddiscription');
const searchbutton=document.getElementById('searchButton');
const searchbar = document.getElementById('searhMealBar');
const shufflebutton = document.getElementById('shuffle');
const submit = document.getElementById('submit');

function mealnamefetch(e){
    e.preventDefault();
    const foodSelection = searchbar.value;
    if(foodSelection){
        fetch(`https:\\www.themealdb.com/api/json/v1/1/search.php?s=${foodSelection}`)
        .then(res=>res.json())
        .then(data=>{
            if(data.meals===null){
                categorytitle.innerHTML=`<p>your ${foodSelection} category we can't recognize </P>`        
            }
            else{
                categorygallery.innerHTML=data.meals.map(meals=>`
                <div><img src=""/></div>
                `)
            }
        })
        categorytitle.innerHTML=`<h2>you are selected this ${foodSelection} Category</h2>`;
    }
    else{
        alert(`Please enter food categories`);
    }
    console.log(data);
}

// searchbutton.addEventListener('click',(e)=>{
//     e.preventDefault();
//     const foodSelection=searchbar.value;
//     console.log(foodSelection);
// })

submit.addEventListener('submit',mealnamefetch);