// global variables
const burger = document.querySelector('.burger');
const navWrapper = document.querySelector('.navigation__wrap')
const navLiItems = document.querySelectorAll('.nav__li')
const navLiItem = document.querySelector('.nav__li');
const navigationWrapper = document.querySelector('.navigation__wrap');
const goTopBtn = document.getElementById('goTop');
// starting functions

burger.addEventListener('click',()=>{
    burger.classList.toggle('open');
    navWrapper.classList.toggle('nav_fixed');
});

function headerAnimation() {
    const header = document.querySelector('.header__');
    const topY = window.pageYOffset;
    if (topY > 200) {
        header.style.padding = '20px 0';
        header.style.boxShadow = '0px 4px 5px 0px rgba(0,0,0,0.75)';
        // navLiItem.style.fontSize = '18px';
        navigationWrapper.style.top = '73px';
        goTopBtn.style.opacity = '1';
    }else{
        header.style.padding = '35px 0';
        header.style.boxShadow = '0px 4px 5px 0px rgba(0,0,0,0)';
        // navLiItem.style.fontSize = '20px';
        navigationWrapper.style.top = '103px';
        goTopBtn.style.opacity = '0';
    }
}

// let navUl = document.querySelector('.nav__ul');
// (function test(e){
//     // let windowXPos = window.pageXOffset;
//     // let tests = 500;
//     // switch (windowXPos) {
        
//     //     case windowXPos > tests:
//     //     console.log('windowXPos');
//     //     // document.querySelector('.navigation__wrap').style.top = '102px';
//     //         break;
//     //     case windowXPos > tests: 
//     //      navUl.style.margin = '100px';
//     //      console.log('900 ze naklebi ');
//     //     break;
//     //     default:
//     //     // navUl.style.margin = '100px';
//     //     break;
//     // }
    
// })()

window.addEventListener('scroll',()=>{
    headerAnimation();
})

