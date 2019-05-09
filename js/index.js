// global variables
const burger = document.querySelector('.burger');
const navWrapper = document.querySelector('.navigation__wrap')
const navLiItems = document.querySelectorAll('.nav__li')
const navLiItem = document.querySelector('.nav__li');
const navigationWrapper = document.querySelector('.navigation__wrap');
const goTopBtn = document.getElementById('goTop');
const navUl = document.querySelectorAll('.nav__ul')[0];
const burgerDivider = document.querySelector('.burger__divider');
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

function addWhiteClass(e){
    let navActive = document.querySelector('.white');
    if (navActive != null) {
        navActive.classList.remove('white');
    }
    e.target.classList.add('white');
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
        burgerDivider.style.height = '93px';
    }else{
        header.style.padding = '35px 0';
        header.style.boxShadow = '0px 4px 5px 0px rgba(0,0,0,0)';
        navigationWrapper.style.top = '103px';
        goTopBtn.style.opacity = '0';
        goTopBtn.style.bottom = '-30px';
        burgerDivider.style.height = '108px';
    }
}

function removeActiveClassOnScroll() {
    let topNavigation = document.querySelectorAll('.nav__li a');
    topNavigation.forEach(function (item) {
        item.classList.remove('navli__active');
    })
    
}

function addActiveOnScroll() {
    let workSection    = document.getElementById('work');
    let projectSection = document.getElementById('project');
    let aboutMeSection = document.getElementById('about__me');
    let contactSection = document.getElementById('contact');
    let scrollYtop     = window.pageYOffset;
    let nav            = document.querySelectorAll('.nav__li a');

    if (scrollYtop >= workSection.offsetTop -10 && scrollYtop <= projectSection.offsetTop -100) {
        removeActiveClassOnScroll();
        nav[1].classList.add('navli__active');
    }
    if (scrollYtop >= projectSection.offsetTop -100 && scrollYtop <= aboutMeSection.offsetTop -100) {
        removeActiveClassOnScroll();
        nav[2].classList.add('navli__active');
        
    }
    if (scrollYtop >= aboutMeSection.offsetTop -100 && scrollYtop <= contactSection.offsetTop -100) {
        removeActiveClassOnScroll();
        nav[3].classList.add('navli__active');
    }
    if (scrollYtop >= contactSection.offsetTop -100) {
        removeActiveClassOnScroll();
        nav[4].classList.add('navli__active');
    }
    if (scrollYtop <= workSection.offsetTop -100) {
        removeActiveClassOnScroll();
        nav[0].classList.add('navli__active');
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
    addActiveOnScroll();
});

