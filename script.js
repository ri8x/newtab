// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    
    if (searchInput) {
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                handleSearch(searchInput.value);
            }
        });
    }
});

function handleSearch(query) {
    if (query.trim()) {
        // Default to Google search
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.location.href = searchUrl;
    }
}
