const linkNav = document.querySelectorAll('.nav-link');

for(let current of linkNav) {
    current.addEventListener('click', (e) => {
        const navActive = document.querySelector('.active');
        if (navActive) {
            navActive.classList.remove('active');
        }
        current.classList.add('active');
    });
}