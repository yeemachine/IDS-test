
window.onload = function() {

    var mySVG = document.getElementById("IDS");
    var svgDoc = mySVG.contentDocument;
    var container = svgDoc.getElementsByClassName("svgcontainer");
    var stroke1 = svgDoc.getElementsByClassName("stroke");
    var stroke2 = svgDoc.getElementsByClassName("stroke2");
    var stroke3 = svgDoc.getElementsByClassName("stroke3");
    var load = svgDoc.getElementsByClassName("load");
 //    var svgDoc;
 //    var stroke1;
 //    var stroke2;
 //    var stroke3;
 //    var container;
 //    var load;
 //    mySVG.addEventListener("load",function() {
 //      svgDoc = mySVG.contentDocument;
 //      container = svgDoc.getElementsByClassName("svgcontainer");
 //      stroke1 = svgDoc.getElementsByClassName("stroke");
 //      stroke2 = svgDoc.getElementsByClassName("stroke2");
 //      stroke3 = svgDoc.getElementsByClassName("stroke3");
 //      load = svgDoc.getElementsByClassName("load");
 //      stroke1.addEventListener("mousedown",function(){alert('hello world!')},false);
 // }, false);

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
   });

};
