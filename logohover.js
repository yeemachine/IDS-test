
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
   $('.home , .about, .ids').toggleClass('showAbout')
   });

};
