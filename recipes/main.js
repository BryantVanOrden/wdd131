import recipes from './recipes.mjs';

document.addEventListener('DOMContentLoaded', () => {
    const recipesContainer = document.getElementById('recipes-container');
    const searchInput = document.getElementById('search-bar');

    // Function to render recipes based on the filtered list
    const renderRecipes = (filteredRecipes) => {
        recipesContainer.innerHTML = ''; // Clear previous content

        filteredRecipes.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.classList.add('recipe-card');

            const recipeImage = document.createElement('img');
            recipeImage.src = recipe.image;
            recipeImage.alt = recipe.name;
            recipeImage.classList.add('recipe-image');

            const recipeDetails = document.createElement('div');
            recipeDetails.classList.add('recipe-details');

            const recipeTagsContainer = document.createElement('div');
            recipeTagsContainer.classList.add('recipe-tags-container');
            recipe.tags.forEach(tag => {
                const recipeTag = document.createElement('div');
                recipeTag.classList.add('recipe-tag');
                recipeTag.textContent = tag;
                recipeTagsContainer.appendChild(recipeTag);
            });

            const recipeTitle = document.createElement('h2');
            recipeTitle.classList.add('recipe-title');
            recipeTitle.textContent = recipe.name;

            const recipeStars = document.createElement('div');
            recipeStars.classList.add('recipe-stars');
            recipeStars.textContent = '★'.repeat(Math.floor(recipe.rating)) + '☆'.repeat(5 - Math.floor(recipe.rating));

            const recipeDescription = document.createElement('p');
            recipeDescription.classList.add('recipe-description');
            recipeDescription.textContent = recipe.description;

            recipeDetails.appendChild(recipeTagsContainer);
            recipeDetails.appendChild(recipeTitle);
            recipeDetails.appendChild(recipeStars);
            recipeDetails.appendChild(recipeDescription);

            recipeCard.appendChild(recipeImage);
            recipeCard.appendChild(recipeDetails);
            recipesContainer.appendChild(recipeCard);
        });
    };

    // Function to shuffle the recipes
    const shuffleRecipes = (recipesArray) => {
        for (let i = recipesArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [recipesArray[i], recipesArray[j]] = [recipesArray[j], recipesArray[i]];
        }
    };

    // Initial rendering of all recipes
    shuffleRecipes(recipes);
    renderRecipes(recipes);

    // Function to filter recipes based on search input
    const filterRecipes = (searchText) => {
        searchText = searchText.toLowerCase();
        const filteredRecipes = recipes.filter(recipe => {
            // Check if the recipe name, description, or any tag includes the searchText
            return (
                recipe.name.toLowerCase().includes(searchText) ||
                recipe.description.toLowerCase().includes(searchText) ||
                recipe.tags.some(tag => tag.toLowerCase().includes(searchText))
            );
        });
        if (searchText === '') {
            shuffleRecipes(filteredRecipes);
        }
        renderRecipes(filteredRecipes);
    };

    // Event listener for input in the search bar
    searchInput.addEventListener('input', (event) => {
        const searchText = event.target.value.trim(); // Get the input value and trim whitespace
        filterRecipes(searchText);
    });
});
