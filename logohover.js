
window.onload = function() {

    var mySVG = document.getElementById("IDS");
    var svgDoc = mySVG.contentDocument;
    var container = svgDoc.getElementsByClassName("svgcontainer");
    var stroke1 = svgDoc.getElementsByClassName("stroke");
    var stroke2 = svgDoc.getElementsByClassName("stroke2");
    var stroke3 = svgDoc.getElementsByClassName("stroke3");
    var load = svgDoc.getElementsByClassName("load");


    $("#IDS").mouseenter(function() {
      $(load).removeClass('load');
      $(container).addClass('hover');
      $(stroke1).addClass('hover');
      $(stroke2).addClass('hover');
      $(stroke3).addClass('hover');

    // console.log('mouseover');
   });

   $("#IDS").mouseleave(function() {
     $(container).removeClass('hover');
     $(stroke1).removeClass('hover');
     $(stroke2).removeClass('hover');
     $(stroke3).removeClass('hover');
    // console.log('mouseout');
   });

    $(svgDoc).click(function() {
    //  console.log('hi');
     $('html, body').animate({
     scrollTop: 0
   }, 'fast');
   $('.selected').removeClass("selected");

  //  $('.home').css({'margin-left':'-100vw','transition':'.25s'});
  //  $('.about').css({'margin-left':'0','transition':'.25s'});
   $('.home , .about, .ids').toggleClass('showAbout');
   $(stroke1).toggleClass('showAbout');
   $(stroke2).toggleClass('showAbout');
   $(stroke3).toggleClass('showAbout');


   });

   $(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
      $(stroke1).addClass('invert');
      $(stroke2).addClass('invert');
      $(stroke3).addClass('invert');
    }else{
      $(stroke1).removeClass('invert');
      $(stroke2).removeClass('invert');
      $(stroke3).removeClass('invert');
    }
  });


};
