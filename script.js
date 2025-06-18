// drink list default section 
const drinkList = document.getElementById("drink-list-container");

for (let i = 0; i < 8; i++) {
    // www.thecocktaildb.com/api/json/v1/1/random.php
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then(response => response.json())
        .then(data => {
            const drink = data.drinks[0];
            const divDrink = document.createElement("div");
            divDrink.className = "card";
            divDrink.innerHTML = `
                <img src="${drink.strDrinkThumb}" class="card-img-top" alt="${drink.strDrink}">
                <div class="card-body">
                    <h2 class="card-title">Name : ${drink.strDrink}</h2>
                    <p class="card-text">Category: ${drink.strCategory}</p>
                    <p class="card-text">Instructions: ${drink.strInstructions.slice(0, 15)}</p>
                    <button onclick="addToCart(${drink.idDrink}, this)" type="button" class="btn addCart">Add to Cart</button>
                    <button onclick="showDetails(${drink.idDrink})" type="button" class="btn ">Details</button>

                </div>
            `;
            drinkList.appendChild(divDrink);
        })
        .catch(error => console.error('Error fetching drink:', error));
}

// search section
// www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
document.getElementById("searchBtn").addEventListener("click", (event) => {
    event.preventDefault();
    const searchInput = document.getElementById("search-box").value;
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`)
        .then(response => response.json())
        .then(data => {
            drinkList.innerHTML = "";
            data.drinks.forEach(drink => {
                let divDrink = document.createElement("div");
                divDrink.className = "card";
                divDrink.innerHTML = `
                <img src="${drink.strDrinkThumb}" class="card-img-top" alt="${drink.strDrink}">
                <div class="card-body">
                    <h2 class="card-title">Name : ${drink.strDrink}</h2>
                    <p class="card-text">Category: ${drink.strCategory}</p>
                    <p class="card-text">Instructions: ${drink.strInstructions.slice(0, 15)}</p>
                    <button onclick="addToCart(${drink.idDrink}, this)" type="button" class="btn  addCart">Add to Cart</button>
                    <button onclick="showDetails(${drink.idDrink})" type="button" class="btn ">Details</button>

                </div>
            `;
                drinkList.appendChild(divDrink);
            });

        })
        .catch(error => {
            console.error('Error fetching search results:', error);
            drinkList.innerHTML = `<h1 class = "errorText">No drinks found. Please try another search.</h1>`;
        });
});


// www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
function showDetails(id) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(response => response.json())
        .then(data => {
            const drink = data.drinks[0];

            const modalBody = document.getElementById("modal-body");
            modalBody.innerHTML = `
                <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" class="img-fluid mb-3" />
                <h5>${drink.strDrink}</h5>
                <p><strong>Category:</strong> ${drink.strCategory}</p>
                <p><strong>Alcoholic:</strong> ${drink.strAlcoholic}</p>
                <p><strong>Glass:</strong> ${drink.strGlass}</p>
                <p><strong>Instructions:</strong> ${drink.strInstructions}</p>
            `;

            // Show the modal using Bootstrap's JavaScript API
            const modal = new bootstrap.Modal(document.getElementById('drinkDetailsModal'));
            modal.show();
        })
        .catch(error => {
            console.error('Error fetching drink details:', error);
            alert("Error fetching drink details. Please try again later.");
        });
}


function addToCart(id, button) {
    console.log("Add to Cart button clicked", id);
    button.disabled = true;
    button.innerText = "Added";

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(response => response.json())
        .then(data => {
            let total = document.getElementById("total").innerText;
            if (total < 7) {
                total = parseInt(total) + 1;
                document.getElementById("total").innerText = total;

                const cartContainer = document.getElementById("cart-container");
                const drink = data.drinks[0];
                const divCartItem = document.createElement("div");
                divCartItem.className = "cart-item";
                divCartItem.innerHTML = `
                <p> ${total} </p>
                <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
                <p> ${drink.strDrink.slice(0, 10)} </p>
            `;

                cartContainer.appendChild(divCartItem);
            } else {
                alert("You can only add 7 drinks to the cart.");
                return;
            }

        })
        .catch(error => {
            console.error('Error fetching drink details:', error);
            alert("Error fetching drink details. Please try again later.");
        });
}



