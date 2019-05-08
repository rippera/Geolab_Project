// global variables
const burger = document.querySelector('.burger');
const navWrapper = document.querySelector('.navigation__wrap')
const navLiItems = document.querySelectorAll('.nav__li')
const navLiItem = document.querySelector('.nav__li');
const navigationWrapper = document.querySelector('.navigation__wrap');
const goTopBtn = document.getElementById('goTop');
const navUl = document.querySelectorAll('.nav__ul')[0];
// starting functions

function addActiveClass(e){
    let navActive = document.querySelector('.navli__active');
    if (navActive != null) {
        navActive.classList.remove('navli__active');
    }
    e.target.classList.add('navli__active');
    burger.classList.remove('open');
    navWrapper.classList.remove('nav_fixed');
}

function removeActiveClass(e){
    let navActive = document.querySelector('.navli__active');
    if (navActive != null) {
        navActive.classList.remove('navli__active');
    }
    e.target.classList.remove('navli__active');
    burger.classList.remove('open');
    navWrapper.classList.remove('nav_fixed');
}

function mainAnimations() {
    const header = document.querySelector('.header__');
    const topY = window.pageYOffset;
    if (topY > 200) {
        header.style.padding = '20px 0';
        header.style.boxShadow = '0px 4px 5px 0px rgba(0,0,0,0.75)';
        navigationWrapper.style.top = '73px';
        goTopBtn.style.opacity = '1';
        goTopBtn.style.bottom = '0';
    }else{
        header.style.padding = '35px 0';
        header.style.boxShadow = '0px 4px 5px 0px rgba(0,0,0,0)';
        navigationWrapper.style.top = '103px';
        goTopBtn.style.opacity = '0';
        goTopBtn.style.bottom = '-30px';
    }
}

// addEventListener functions

burger.addEventListener('click',()=>{
    burger.classList.toggle('open');
    navWrapper.classList.toggle('nav_fixed');
});

navUl.addEventListener('click',addActiveClass);

window.addEventListener('scroll',()=>{
    mainAnimations();
});

function responsiveFunction(x) {
    if (x.matches) { 
        navUl.addEventListener('click',removeActiveClass);
        document.getElementById('parent').classList.remove('navli__active');
    }
}
let x = window.matchMedia("(max-width: 992px)");
responsiveFunction(x) ;
x.addListener(responsiveFunction);
