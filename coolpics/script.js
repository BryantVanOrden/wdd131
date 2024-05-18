document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const menu = document.querySelector('nav');
    const viewer = document.querySelector('.viewer');
    const viewerImage = viewer.querySelector('img');
    const closeViewerButton = viewer.querySelector('.close-viewer');

    function toggleMenu() {
        menu.classList.toggle('show');
    }

    function handleResize() {
        if (window.innerWidth > 600) {
            menu.classList.remove('hide');
            menu.classList.remove('show');
        } else {
            menu.classList.add('hide');
        }
    }

    function viewerTemplate(pic, alt) {
        viewerImage.src = pic;
        viewerImage.alt = alt;
        viewer.classList.remove('hide'); // Show the modal
    }
    
    function closeViewer() {
        viewer.classList.add('hide'); // Hide the modal
        viewerImage.src = ''; // Reset the image source
    }
    

    function viewHandler(event) {
        if (event.target.tagName === 'IMG') {
            const src = event.target.src;
            const fullSrc = src.replace('-sm', '-full');
            viewerTemplate(fullSrc, event.target.alt);
        }
    }



    menuButton.addEventListener('click', toggleMenu);
    window.addEventListener('resize', handleResize);
    handleResize();

    document.querySelector('.gallery').addEventListener('click', viewHandler);
    closeViewerButton.addEventListener('click', closeViewer); // Add event listener to close button
});
