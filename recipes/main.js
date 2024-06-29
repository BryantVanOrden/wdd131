import recipes from './recipes.mjs';

document.addEventListener('DOMContentLoaded', () => {
    const recipesContainer = document.getElementById('recipes-container');
    const searchInput = document.getElementById('search-bar');

    
    const renderRecipes = (filteredRecipes) => {
        recipesContainer.innerHTML = ''; 

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

    
    const shuffleRecipes = (recipesArray) => {
        for (let i = recipesArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [recipesArray[i], recipesArray[j]] = [recipesArray[j], recipesArray[i]];
        }
    };

    
    shuffleRecipes(recipes);
    renderRecipes(recipes);

    
    const filterRecipes = (searchText) => {
        searchText = searchText.toLowerCase();
        const filteredRecipes = recipes.filter(recipe => {
            
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

    
    searchInput.addEventListener('input', (event) => {
        const searchText = event.target.value.trim(); 
        filterRecipes(searchText);
    });
});
