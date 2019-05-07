// global variables
const burger = document.querySelector('.burger');
const navWrapper = document.querySelector('.navigation__wrap')
const navLiItems = document.querySelectorAll('.nav__li')
const navLiItem = document.querySelector('.nav__li');

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
        navLiItem.style.fontSize = '18px';
    }else{
        header.style.padding = '35px 0';
        header.style.boxShadow = '0px 4px 5px 0px rgba(0,0,0,0)';
        navLiItem.style.fontSize = '20px';
    }
}
let rame = document.querySelector('.nav__ul');
(function test(){
    let st = window.pageXOffset;
    // if (st < 900) {
    //     document.querySelector('.navigation__wrap').style.top = '73px';
    //     console.log('shevida <900 ze');
    // }else if (st < 500 + 'px'){
    //     console.log('naklebi 500 ze ');
    // }
    switch (st < 900) {
        case document.querySelector('.navigation__wrap').style.top = '73px':
            break;
        case st < 500 : 
        rame.style.margin = '100px'
        break;
        default:
            break;
    }
})()
window.addEventListener('scroll',()=>{
    headerAnimation();
})