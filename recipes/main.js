// main.js

// Import the recipes from recipes.mjs
import { recipes } from './recipes.mjs';

window.onload = function() {
    const recipesContainer = document.getElementById('recipes-container');
    recipes.forEach(recipe => {
        const recipeBox = document.createElement('div');
        recipeBox.className = 'recipe-box';
        recipeBox.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
            <div class="recipe-details">
                <span class="recipe-type">${recipe.tags.join(', ')}</span>
                <h3>${recipe.name}</h3>
                <div class="recipe-rating">${'★'.repeat(recipe.rating)}${'☆'.repeat(5 - recipe.rating)}</div>
                <p>${recipe.description}</p>
            </div>
        `;
        recipesContainer.appendChild(recipeBox);
    });

    // Display debugging information
    const debugInfo = document.createElement('pre');
    debugInfo.textContent = JSON.stringify(recipes, null, 2); // Pretty-print the recipes array
    document.body.appendChild(debugInfo);
};
