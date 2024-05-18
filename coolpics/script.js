document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const menu = document.querySelector('nav');

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
        viewer.classList.remove('hide');
    }

    function viewHandler(event) {
        if (event.target.tagName === 'IMG') {
            const src = event.target.src;
            const fullSrc = src.replace('-sm', '-full');
            viewerTemplate(fullSrc, event.target.alt);
        }
    }

    function closeViewer() {
        viewer.classList.add('hide');
    }

    menuButton.addEventListener('click', toggleMenu);
    window.addEventListener('resize', handleResize);
    handleResize();

    document.querySelector('.gallery').addEventListener('click', viewHandler);
    closeViewerButton.addEventListener('click', closeViewer);
});
