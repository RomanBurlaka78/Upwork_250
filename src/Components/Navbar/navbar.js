//  Burger Toggle menu

const burger = document.querySelector('.burger');
const navBarNav = document.querySelector('.navbar_nav');
const navLink = document.querySelectorAll('.nav_link');

burger.addEventListener('click', ()=> {
    burger.classList.toggle('active');
    navBarNav.classList.toggle('active');
   
   
})
navLink.forEach((item)=> {
    item.addEventListener('click', ()=> {
      console.log(item.innerHTML);
        burger.classList.remove('active');
        navBarNav.classList.remove('active');
       
    })

})


