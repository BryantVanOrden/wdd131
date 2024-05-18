document.getElementById("menuBtn").addEventListener("click", function() {
    var nav = document.getElementById("mainNav");
    var menuBtn = document.getElementById("menuBtn");
    var hideBtn = document.getElementById("hideBtn");

    nav.style.display = "flex";
    menuBtn.style.display = "none";
    hideBtn.style.display = "inline-block";
});

document.getElementById("hideBtn").addEventListener("click", function() {
    var nav = document.getElementById("mainNav");
    var menuBtn = document.getElementById("menuBtn");
    var hideBtn = document.getElementById("hideBtn");

    nav.style.display = "none";
    menuBtn.style.display = "inline-block";
    hideBtn.style.display = "none";
});

function handleResize() {
    var nav = document.getElementById("mainNav");
    var menuBtn = document.getElementById("menuBtn");
    var hideBtn = document.getElementById("hideBtn");

    if (window.innerWidth > 1000) {
        nav.style.display = "flex";
        menuBtn.style.display = "none";
        hideBtn.style.display = "none";
    } else {
        nav.style.display = "none";
        menuBtn.style.display = "inline-block";
        hideBtn.style.display = "none";
    }
}


window.addEventListener("resize", handleResize);


window.onload = handleResize;

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
  }
  
  
  function viewHandler(event) {
     
      const clickedElement = event.target;
  
      
      if (clickedElement.tagName === 'IMG') {
          
          const srcParts = clickedElement.getAttribute('src').split('-');
  
          
          const fullImagePath = `${srcParts[0]}-full.${srcParts[1].split('.')[1]}`;
  
          
          const viewerHTML = viewerTemplate(fullImagePath, clickedElement.getAttribute('alt'));
  
          
          document.body.insertAdjacentHTML('afterbegin', viewerHTML);
  
          
          const closeButton = document.querySelector('.close-viewer');
          closeButton.addEventListener('click', closeViewer);
      }
  }
  

function closeViewer() {
    const viewer = document.querySelector('.viewer');
    if (viewer) {
        viewer.remove();
    }
}


const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', viewHandler);


document.addEventListener('click', function(event) {
    if (event.target.classList.contains('close-viewer')) {
        closeViewer();
    }
});
