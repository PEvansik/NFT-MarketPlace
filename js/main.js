
// ***************************************************************
// <==================== NAVBAR CONTROLLERS ========================>
// ***************************************************************

const hamburger = document.querySelector('.nav-open');
const closeBtn = document.querySelector('.nav-close');
const overLay = document.querySelector('.overlay');
const navBar = document.querySelector('.nav-bar');
const navToggler = document.querySelectorAll('[data-nav-toggler]')


toggleNav = (elem, evt, callfunc) => {
    if (elem.length > 1) {
        elem.forEach(element => {
            element.addEventListener(evt, callfunc)
        });
    }else if (elem.length = 1) {
        elem.addEventListener(evt, callfunc)
    }
}

const openNav = () => {
    navBar.classList.toggle('active')
    overLay.classList.toggle('active')
}

const closeNav = () => {
    navBar.classList.toggle('active')
    overLay.classList.toggle('active')
}


// ***************************************************************
// <==================== NAVBAR CONTROLS ========================>
// ***************************************************************


// OPEN NAVIGATION
toggleNav(hamburger, 'click', openNav)
// CLOSE NAVIGATION
toggleNav(navToggler, 'click', closeNav)




