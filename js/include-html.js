document.addEventListener('DOMContentLoaded', function() {
    // Load all fragments
    const fragments = {
        'nav-placeholder': 'fragments/nav.html',
        'header-placeholder': 'fragments/header.html',
        'footer-placeholder': 'fragments/footer.html'
    };

    for (const [id, path] of Object.entries(fragments)) {
        fetch(path)
            .then(response => response.text())
            .then(data => {
                document.getElementById(id).innerHTML = data;
            })
            .catch(error => console.error(`Error loading ${path}:`, error));
    }

    // Update page title dynamically
    const currentPage = window.location.pathname.split('/').pop().split('.')[0];
    document.title = `${currentPage.charAt(0).toUpperCase() + currentPage.slice(1)} - Your Name`;
}); 