function loadComponent(url, elementId) {
    return fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}

document.addEventListener("DOMContentLoaded", function() {
    Promise.all([
        loadComponent('header.html', 'header-placeholder'),
        loadComponent('footer.html', 'footer-placeholder')
    ]).then(() => {
        var navbarToggler = document.querySelector('.navbar-toggler');
        var mobileHeader = document.querySelector('.mobile-header');
        var closeMobileMenu = document.querySelector('.mobile-header .close');

        if (navbarToggler && mobileHeader && closeMobileMenu) {
            navbarToggler.addEventListener('click', function() {
                mobileHeader.classList.add('show');
            });

            closeMobileMenu.addEventListener('click', function() {
                mobileHeader.classList.remove('show');
            });
        } else {
            console.error('One or more elements not found:', {
                navbarToggler,
                mobileHeader,
                closeMobileMenu
            });
        }
    }).catch(error => console.error('Error loading components:', error));
});
