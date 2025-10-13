function toggleMenu(){
    const menu = document.querySelector('.menu-links')
    const icon = document.querySelector('.hamburger-icon')

    menu.classList.toggle("open")
    icon.classList.toggle('open')
}

let lastScroll = 0;
const navbar = document.getElementById('desktop-nav');
const hamburgerNav = document.getElementById('hamburger-nav');
const scrollThreshold = 100; 

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        hamburgerNav.classList.remove('scroll-up');
        return;
    }
    
    const scrollDiff = Math.abs(currentScroll - lastScroll);
    
    if (scrollDiff < scrollThreshold) {
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
        hamburgerNav.classList.remove('scroll-up');
        hamburgerNav.classList.add('scroll-down');
    } 

    else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
        hamburgerNav.classList.remove('scroll-down');
        hamburgerNav.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});