console.log("meal.js loaded");

document.getElementById("searchBtn").addEventListener("click", (event) => {
    event.preventDefault();
    const text = document.getElementById("search-box").value;
    // www.themealdb.com/api/json/v1/1/search.php?f=a
    // Didn't understand how to search from any position, that's why I used the first letter
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${text[0]}`)
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById("meal-list-container");
            container.innerHTML = "";
            data.meals.forEach(meal => {
                const div = document.createElement("div");
                div.classList.add("meal-item");
                div.classList.add("card");
                div.innerHTML = `
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                    <div class="card-body">
                        <h3>${meal.strMeal}</h3>
                    </div>
                `;

                div.addEventListener("click", () => {
                    // www.themealdb.com/api/json/v1/1/lookup.php?i=52772
                    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`)
                        .then(res => res.json())
                        .then(data => {
                            console.log("clicked on meal:", data.meals[0].strMeal);
                            const mealDetails = data.meals[0];
                            const detailsContainer = document.getElementById("meal-details");
                            detailsContainer.innerHTML = "";
                            const detailsDiv = document.createElement("div");
                            detailsDiv.classList.add("card");
                            detailsDiv.classList.add("meal-item-details");
                            detailsDiv.innerHTML = `
                            <img src="${mealDetails.strMealThumb}" alt="${mealDetails.strMeal}">
                            <div class="card-body">
                                <h3>${mealDetails.strMeal}</h3>
                                <h4>Ingredients:</h4>
                                <ul>
                                    <li>${mealDetails.strIngredient1}</li>
                                    <li>${mealDetails.strIngredient2}</li>
                                    <li>${mealDetails.strIngredient3}</li>
                                    <li>${mealDetails.strIngredient4}</li>
                                    <li>${mealDetails.strIngredient5}</li>
                                    <li>${mealDetails.strIngredient6}</li>
                                </ul>
                             </div>
                `;
                            detailsContainer.appendChild(detailsDiv);
                        });
                });

                container.appendChild(div);
            });
        })

});


