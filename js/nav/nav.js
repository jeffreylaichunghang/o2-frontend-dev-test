const burger_menu = document.getElementById('burger-menu')
const nav_menu = document.querySelector('.mobile-nav-menu')

burger_menu.addEventListener('click', () => {
    const display = nav_menu.style.display
    if (display === 'none') {
        nav_menu.style.display = 'flex'
    } else {
        nav_menu.style.display = 'none'
    }
})
