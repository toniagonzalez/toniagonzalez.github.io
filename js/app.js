//--------------------Variables---------------//
//--Nav Bar Variables-----//
const navBar = $('.mainNav')[0];
let navBarShow = function navBarShow() {
  $(navBar).css('visibility', 'visible');
}

let navBarHide = function navBarHide(){
  $(navBar).css('visibility', 'hidden');
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

//-- Slider Variables-----//
const sliderDesignMobile = $('.sliderDesign')[0];
const sliderCodeMobile = $('.sliderCode')[0];
const sliderDesign = $('.sliderDesign')[1];
const sliderCode = $('.sliderCode')[1];

//-- Read More / Read Less Variables-----//
let designSection = $('.projectSection')[0];
let codeSection = $('.projectSection')[1];
let readMeDesignMobile = $('.designButton')[0];
let readMeCodeMobile = $('.codeButton')[0];
let backDesign = $('.closeDesign')[0];
let backCode = $('.closeCode')[0];
let closeDesign = $('.closeDesign')[1];
let closeCode = $('.closeCode')[1];

let readMeDesign = $('.designButton')[1];
let readMeCode = $('.codeButton')[1];


let designShow = function designShow() {
  $(designSection).show();
}

let designHide = function designHide() {
  $(designSection).hide();
}

let codeShow = function codeShow() {
  $(codeSection).show();
}

let codeHide = function codeHide() {
  $(codeSection).hide();
}

let backDesignShow = function backDesignShow() {
  $(backDesign).css('visibility', 'visible');
}

let backDesignHide = function backDesignHide(){
  $(backDesign).css('visibility', 'hidden');
}

//----Variables to Hide and Show Back Buttons
let designPanelStartMobile = function designPanelStart() {
    return $(readMeDesignMobile).offset().top;
}
let designPanelStart = function designPanelStart() {
    return $(readMeDesign).offset().top;
}

let designPanelEnd = function designPanelEnd() {
    return $(closeDesign).offset().top;
}
let designBackPosition = function designBackPosition() {
    return $(backDesign).offset().top;
}

let codePanelStartMobile = function designPanelStart() {
    return $(readMeCodeMobile).offset().top;
}

let codePanelStart = function designPanelStart() {
    return $(readMeCode).offset().top;
}

let codePanelEnd = function codePanelEnd() {
    return $(closeCode).offset().top;
}
let codeBackPosition = function codeBackPosition() {
    return $(backCode).offset().top;
}


let backCodeShow = function backCodeShow() {
  $(backCode).css('visibility', 'visible');
}

let backCodeHide = function backCodeHide(){
  $(backCode).css('visibility', 'hidden');
}

let arrowDownDesign = $('.designButton span');
let arrowDownCode = $('.codeButton span');


backDesignShow();
backCodeShow();
designHide();
codeHide();



//-------------Hide Nav Bar at top/ show Nav on Scroll---//
$(document).ready(function(){
  designPanelEnd();
  designPanelStart();
  designPanelStartMobile();
  designBackPosition();
  codePanelStartMobile();
  codePanelStart();
  codePanelEnd();
  codeBackPosition();
  backDesignShow();
  backCodeShow();

    $(window).scroll(function(){

            if ($(this).scrollTop() < 200) {
                navBarHide();
                iconBarHide();
             } else {
                    navBarShow();
                    iconBarShow();
                  }

            if (designBackPosition() > designPanelEnd() || designBackPosition() < designPanelStart() || designBackPosition() < designPanelStartMobile() ) {
                backDesignHide();
             } else {
                     backDesignShow();
                  }

            if (codeBackPosition() > codePanelEnd() || codeBackPosition() < codePanelStart() || codeBackPosition() < codePanelStartMobile()) {
                backCodeHide();
            } else {
                   backCodeShow();
                 }

      });

});


//---------------Slider----------//

$(document).ready(function(){

  $(sliderDesignMobile).skippr({
      transition: 'fade',
      speed: 1000,
      easing: 'linear',
      navType: 'bubble',
      childrenElemntType: 'div',
      autoPlay: true,
      autoPlayDuration: 4000,
      arrows: false
  });


  $(sliderCodeMobile).skippr({
      transition: 'fade',
      speed: 1000,
      easing: 'linear',
      navType: 'bubble',
      childrenElemntType: 'div',
      autoPlay: true,
      autoPlayDuration: 4000,
      arrows: false
  });

  $(sliderDesign).skippr({
      transition: 'fade',
      speed: 1000,
      easing: 'linear',
      navType: 'bubble',
      childrenElemntType: 'div',
      autoPlay: true,
      autoPlayDuration: 4000,
      arrows: false
  });

  $(sliderCode).skippr({
      transition: 'fade',
      speed: 1000,
      easing: 'linear',
      navType: 'bubble',
      childrenElemntType: 'div',
      autoPlay: true,
      autoPlayDuration: 4000,
      arrows: false
  });

});

// Read More Button & closing section
$(document).ready(function(){
  //--Variables
    let designTop;
    let codeTop;

          // $(window).scrollTop() > $(this).offset().top) ||
          $(readMeDesignMobile).on('click', function(e){

                  if ($(this).text() === 'Read More') {
                      designTop = $(window).scrollTop();
                      designShow();
                      $(this).text('Read Less');
                    }

                  else {
                        designHide();
                        $(window).scrollTop(designTop);
                        $(this).text('Read More');
                    }

            });

          $(closeDesign).on('click', function(e){
                  if (e.target) {
                      designHide();
                      $(window).scrollTop(designTop);
                  }
                  $(readMeDesign).text('Read More');
                  $(readMeDesignMobile).text('Read More');
            });

          $(backDesign).on('click', function(e){
                  if (e.target) {
                      designHide();
                      $(window).scrollTop(designTop);
                  }
            });

          $(readMeDesign).on('click', function(e){
                  if ($(this).text() === 'Read More') {
                      designTop = $(window).scrollTop();
                      designShow();
                      $(this).text('Read Less');
                  }
                  else {
                        designHide();
                        $(window).scrollTop(designTop);
                        $(this).text('Read More');
                    }
            });


            $(readMeCodeMobile).on('click', function(e){
                    if ($(this).text() === 'Read More') {
                        codeTop = $(window).scrollTop();
                        codeShow();
                        $(this).text('Read Less');
                    }
                    else {
                          codeHide();
                          $(window).scrollTop(designTop);
                          $(this).text('Read More');
                      }
            });

            $(closeCode).on('click', function(e){
                      if (e.target) {
                         codeHide();
                         $(window).scrollTop(codeTop);
                      }
                      $(readMeCode).text('Read More');
                      $(readMeCodeMobile).text('Read More');
            });

            $(readMeCode).on('click', function(e){
                if ($(this).text() === 'Read More') {
                    codeTop = $(window).scrollTop();
                    codeShow();
                    $(this).text('Read Less');
                }
                else {
                      designHide();
                      $(window).scrollTop(designTop);
                      $(this).text('Read More');
                  }
            });


            $(backCode).on('click', function(e){
                  if (e.target) {
                     codeHide();
                     $(window).scrollTop(codeTop);
                  }
            });

});
