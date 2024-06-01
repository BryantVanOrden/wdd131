document.addEventListener("DOMContentLoaded", () => {
    const articlesContainer = document.querySelector("#maincontent");
    const sidebarContainer = document.querySelector(".left-sidebar");
    const sortSelect = document.getElementById('sort');
    const ageSelect = document.getElementById('age');
    const genreSelect = document.getElementById('genre');
    const ratingSelect = document.getElementById('rating');
    let articles = [];

    
    fetch('articles.json')
        .then(response => response.json())
        .then(data => {
            articles = data;
            displayArticles(articles);
        });

    
    function displayArticles(filteredArticles) {
        articlesContainer.innerHTML = "";
        sidebarContainer.innerHTML = "";
        if (filteredArticles.length === 0) {
            articlesContainer.innerHTML = "<p>No books meet that criteria.</p>";
            return;
        }
        filteredArticles.forEach(article => {
            const articleElement = document.createElement("article");
            articleElement.classList.add("article");
            articleElement.innerHTML = `
                <div class="article-content">
                    <h3>${article.title}</h3>
                    <img src="${article.imgSrc}" alt="${article.imgAlt}">
                    <p>${article.description}</p>
                </div>
            `;
            articlesContainer.appendChild(articleElement);

            const detailsElement = document.createElement("div");
            detailsElement.classList.add("article-details");
            const formattedDate = formatDate(article.date);
            detailsElement.innerHTML = `
                <p>${formattedDate}</p>
                <p>${article.ages}</p>
                <p>${article.genre}</p>
                <p>${article.stars}</p>
            `;
            sidebarContainer.appendChild(detailsElement);
        });
    }

    
    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    
    function applyFiltersAndSort() {
        let filteredArticles = articles;

        
        const ageValue = ageSelect.value;
        if (ageValue) {
            filteredArticles = filteredArticles.filter(article => article.ages === ageValue);
        }

        
        const genreValue = genreSelect.value;
        if (genreValue) {
            filteredArticles = filteredArticles.filter(article => article.genre.toLowerCase() === genreValue.toLowerCase());
        }

        
        const ratingValue = ratingSelect.value;
        if (ratingValue) {
            filteredArticles = filteredArticles.filter(article => article.stars.length === parseInt(ratingValue));
        }

        
        const sortValue = sortSelect.value;
        if (sortValue === 'date') {
            filteredArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (sortValue === 'rating') {
            filteredArticles.sort((a, b) => b.stars.length - a.stars.length);
        }

        displayArticles(filteredArticles);
    }

    
    sortSelect.addEventListener('change', applyFiltersAndSort);
    ageSelect.addEventListener('change', applyFiltersAndSort);
    genreSelect.addEventListener('change', applyFiltersAndSort);
    ratingSelect.addEventListener('change', applyFiltersAndSort);
});
