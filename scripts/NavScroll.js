// Navbar Animation on Scroll

$(window).on("scroll", () => {
    if($(window).scrollTop()) {
    } else {
        $(".navbar").removeClass("black-background");
    }
});



var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       // downscroll code
       $(".navbar").css("animation", "fadeOutUp 0.2s ease");
       setTimeout(() => {
        $(".navbar").addClass("hide black-background");           
       }, 200);
   } else {
      // upscroll code
      $(".navbar").css("animation", "fadeInDown 0.2s ease");
      setTimeout(() => {
        $(".navbar").removeClass("hide");          
      }, 200);
   }
   lastScrollTop = st;
});


const burger = document.querySelector(".burger");
const burgerIcon = document.querySelector(".burger i");
const navlinks = document.querySelector(".navlinks");
const body = document.querySelector("body");


burger.addEventListener("click", () => {
    if(navlinks.style.display === "") {
        navlinks.style.animation = "fadeInRight 0.7s ease";
        burgerIcon.classList.value = "fas fa-times";
        navlinks.style.display = "block";
    } else {
        navlinks.style.animation = "fadeOutRight 0.7s ease";
        burgerIcon.classList.value = "fas fa-bars";
        setTimeout(() => {
            navlinks.style.display = "";        
        }, 700);
    }
});



// if(navlinks.style.display) {
//     navlinks.style.animation = "fadeInRight 1s ease";
//     navlinks.style.display = "";   
// } else {
//     navlinks.style.display = "block";
// }







