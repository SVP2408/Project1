
const responsive = {
    0:{
       items:1
    },
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    }
}

$(document).ready(function () {

   $nav = $('.nav');
   $toggleCollapse = $('.toggle-collapse');

   /** click event on toggle menu */
   $toggleCollapse.click(function () {
       $nav.toggleClass('collapse');
   })

   //owl-carousel for blog
   $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout:3000,
    dots:false,
    nav:true,
    navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
    responsive : responsive
   });


   //Click to scroll top
   $('.move-up span').click(function(){
    $('html,body').animate({
        scrollTop:0
    },1000);
   })

   //AOS. Instance
   AOS.init();
   
});



const theBody = document.querySelector('body');
      const openNav = document.querySelector('.menu-bar button');
      const closeNav = document.querySelector('.close-nav button');
      const Navbar = document.querySelector('.navbar');

      // function bodyScroll(){
      //     if(Navbar.classList.contains('show')){
      //         theBody.classList.add('hide-scroll');
      //     }
      //     else if(theBody.classList.contains('hide-scroll')){
      //         theBody.classList.remove('hide-scroll');
      //     }
      // }

      function showHide(){
          Navbar.classList.toggle('show');
          // bodyScroll();
      }

      openNav.onclick = showHide;
      closeNav.onclick = showHide;