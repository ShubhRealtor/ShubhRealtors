document.addEventListener("DOMContentLoaded", function () {
    function loadComponent(id, file) {
        fetch(file)
            .then(response => {
                if (!response.ok) throw new Error(`Could not load ${file}`);
                return response.text();
            })
            .then(data => {
                document.getElementById(id).innerHTML = data;
                
                // Highlight active navigation link automatically
                if (id === 'header-placeholder') {
                    const currentPage = window.location.pathname.split("/").pop() || "index.html";
                    const navLinks = document.querySelectorAll('.nav-link');
                    navLinks.forEach(link => {
                        if (link.getAttribute('data-page') === currentPage) {
                            link.classList.remove('text-gray-600');
                            link.classList.add('text-amber-700', 'font-semibold');
                        }
                    });
                }
            })
            .catch(error => console.error('Error loading component:', error));
    }

    if (document.getElementById('header-placeholder')) {
        loadComponent('header-placeholder', 'components/header.html');
    }
    if (document.getElementById('footer-placeholder')) {
        loadComponent('footer-placeholder', 'components/footer.html');
    }
});