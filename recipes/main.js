// main.js

// Import the recipes from recipes.mjs
import { recipes } from './recipes.mjs';

// Generate the recipe boxes dynamically
const recipeBoxes = recipes.map(recipe => `
    <div class="recipe-box">
        <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
        <div class="recipe-details">
            <span class="recipe-type">${recipe.tags.join(', ')}</span>
            <h3>${recipe.name}</h3>
            <div class="recipe-rating">${'★'.repeat(recipe.rating)}${'☆'.repeat(5 - recipe.rating)}</div>
            <p>${recipe.description}</p>
        </div>
    </div>
`).join('');

// Create the main content
const appContainer = document.getElementById('app');
appContainer.innerHTML = `
    <header>
        <img src="images/recipe-book.png" alt="Recipe Book" id="header-image">
        <img src="images/recipe-book-word.png" alt="Recipe Book" id="header-image">
    </header>
    <div id="search-container">
        <input type="text" id="search-bar" placeholder="Search recipes...">
        <button id="search-button"><img src="images/search.svg" alt="Search"></button>
    </div>
    <hr>
    <main id="recipes-container">
        ${recipeBoxes}
    </main>
    <footer>
        <a href="https://www.flaticon.com/free-icons/recipe" title="Recipe icons">Recipe icons created by Freepik - Flaticon</a>
        <div class="social-icons">
            <img src="images/instagram_icon.svg" alt="Instagram">
            <img src="images/pinterest_icon.svg" alt="Pinterest">
            <img src="images/youtube_icon.svg" alt="YouTube">
        </div>
    </footer>
`;
