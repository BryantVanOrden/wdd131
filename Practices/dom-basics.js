// Step 1: Creating and appending a new paragraph
const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with JavaScript!";
document.body.appendChild(newParagraph);

// Step 2: Adding an image
const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Random Image");
document.body.appendChild(newImage);

// Step 3: Inserting a whole string of HTML
const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

// Step 4: Creating a new section with an h2 and a paragraph
const newSection = document.createElement("section");
const newHeading = document.createElement("h2");
const newParagraph2 = document.createElement("p");

newHeading.innerText = "DOM Basics";
newParagraph2.innerText = "This was added through JavaScript";

newSection.appendChild(newHeading);
newSection.appendChild(newParagraph2);
document.body.appendChild(newSection);
