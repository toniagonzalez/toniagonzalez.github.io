//--------------------Variables---------------//

//--Nav Bar Variables-----//
const navBar = $('.mainNav')[0];
let navBarShow = function navBarShow() {
  $(navBar).css('visibility', 'visible');
}

let navBarHide = function navBarHide(){
  $(navBar).css('visibility', 'hidden');
}

let home = function home() {
    return $('#top').offset().top;
}
let portfolio = function portfolio() {
    return $('#portfolio').offset().top;
}
let contact = function contact() {
    return $('#contact').offset().top;
}

navBarHide();

//--Icon Bar Variables-----//
const iconBar = $('footer ul')[0];
let iconBarShow = function iconBarShow() {
  $(iconBar).css('visibility', 'visible');
}

let iconBarHide = function iconBarHide(){
  $(iconBar).css('visibility', 'hidden');
}

iconBarHide();


//-------------Functions Triggered on Scroll------------//
$(document).ready(function(){
  //-----Call Hide and Show Functions---//
  home();
  contact();
  portfolio();


    $(window).scroll(function(){

            //-------------Hide/Show Nav & Social Icon Bar on Scroll---//
            if ($(this).scrollTop() < 80) {
                navBarHide();
                iconBarHide();
             } else {
                    navBarShow();
                    iconBarShow();
                  }

           //-------------Active Navigation Links on Scroll--------//
           //---Add CurrentLink Class to Home----//
           if (($(this).scrollTop()+ 50) < portfolio()) {
               $(".homeLink").addClass("currentLink");
               $(".portfolioLink").removeClass("currentLink");
               $(".contactLink").removeClass("currentLink");

           }
           else {
               $(".homeLink").removeClass("currentLink");
           }
           //---Add CurrentLink Class to Portfolio----//
           if (($(this).scrollTop()+ 50) >= portfolio() && $(this).scrollTop() < contact()) {
               $(".portfolioLink").addClass("currentLink");
                $(".contactLink").removeClass("currentLink");
               $(".homeLink").removeClass("currentLink");
           }
           else {
               $(".portfolioLink").removeClass("currentLink");
           }
           //---Add CurrentLink Class to Contact----//
           if (($(this).scrollTop()+ 50) >= contact()) {
               $(".contactLink").addClass("currentLink");
               $(".portfolioLink").removeClass("currentLink");
               $(".homeLink").removeClass("currentLink");
           }
           else {
               $(".contactLink").removeClass("currentLink");
           }

      });

});



//--- View Image Under info Card on View click----//
$(document).ready(function(){

          //--- Listener Placed on Project and Design Cards----//
          $('.project, .designSkill').on('click', function(){

              //--- Select Text Overlay on Card and Toggle Opacity----//
              this.querySelector('.textOverlay').classList.toggle('clicked');

          });

});
