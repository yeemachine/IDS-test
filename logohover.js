
window.onload = function() {

    var mySVG = document.getElementById("IDS");
    var svgDoc = mySVG.contentDocument;
    var container = svgDoc.getElementsByClassName("svgcontainer");
    var stroke1 = svgDoc.getElementsByClassName("stroke");
    var stroke2 = svgDoc.getElementsByClassName("stroke2");
    var stroke3 = svgDoc.getElementsByClassName("stroke3");
    var load = svgDoc.getElementsByClassName("load");


    $("#IDS").mouseover(function() {

      $(load).removeClass('load');
      $(container).addClass('hover');
      $(stroke1).addClass('hover');
      $(stroke2).addClass('hover');
      $(stroke3).addClass('hover');


    // console.log('mouseover');
   });

   $("#IDS").mouseout(function() {
     $(container).removeClass('hover');
     $(stroke1).removeClass('hover');
     $(stroke2).removeClass('hover');
     $(stroke3).removeClass('hover');
    // console.log('mouseout');
   });

    $(svgDoc).click(function() {
        if ($(window).scrollTop() > 50 ) {
    //  console.log('hi');
          $('html, body').animate({
              scrollTop: 0
            }, 'fast');
          $('.selected').removeClass("selected");
        }else{
          $('html, body').animate({
              scrollTop: $('.speaker.current').offset().top
            }, 'fast');
        }
   });

   $('.aboutButton').click(function(){
     $(load).removeClass('load');
     $('.home , .about, .ids, .aboutButton').toggleClass('showAbout');
     $(stroke1).toggleClass('showAbout');
     $(stroke2).toggleClass('showAbout');
     $(stroke3).toggleClass('showAbout');

     if ($('.aboutButton').attr('status') === 'about'){
       $('.aboutButton').attr('status','');
       $('.aboutButton p').html('About');
     }else{
        $('.aboutButton').attr('status','about');
        $('.aboutButton p').html('Home');
     }
   });

   $(window).scroll(function() {

    if ($(this).scrollTop() > 50 ) {

      var isMobile = window.matchMedia("only screen and (max-width: 820px)");
        if (isMobile.matches) {}
        else{
          $(stroke1).addClass('invert');
          $(stroke2).addClass('invert');
          $(stroke3).addClass('invert');
        }
    }else{
      $(stroke1).removeClass('invert');
      $(stroke2).removeClass('invert');
      $(stroke3).removeClass('invert');
    }
  });


};
