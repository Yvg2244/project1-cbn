const burger=document.querySelector('.burger');
let showNavbar=false;
burger.addEventListener('click',function(){
    console.log('clicked')
    document.querySelector('.burger :nth-child(1)').classList.toggle("first-child-transform")
    document.querySelector('.burger :nth-child(2)').classList.toggle("middle-child-transform")
    document.querySelector('.burger :nth-child(3)').classList.toggle("last-child-transform")
    if(!showNavbar)
    document.querySelector('.navbar-list').style.transform="translateY(0%) "
    else
    document.querySelector('.navbar-list').style.transform="translateY(-100%)"
    showNavbar=!showNavbar
})

