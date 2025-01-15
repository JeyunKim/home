document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('main');
    const routes = {
        'home': '/pages/home.html',
        'work': '/pages/work.html',
        'contact': '/pages/contact.html'
    };

    // Load page content without refresh
    async function loadContent(page) {
        try {
            const response = await fetch(routes[page]);
            const content = await response.text();
            mainContent.innerHTML = content;
            // Update URL without page refresh
            history.pushState({ page }, '', `${page}`);
        } catch (error) {
            console.error('Error loading page:', error);
        }
    }

    // Handle navigation
    document.addEventListener('click', (e) => {
        if (e.target.matches('nav a')) {
            e.preventDefault();
            const page = e.target.getAttribute('href').split('.')[0];
            loadContent(page === 'index' ? 'home' : page);
        }
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', (e) => {
        if (e.state?.page) {
            loadContent(e.state.page);
        }
    });
}); 