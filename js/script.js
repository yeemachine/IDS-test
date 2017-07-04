$(window).on('beforeunload', function() {
    $(window).scrollTop(0);

    // $('.load').addClass('regina');

  });
var currentSpeaker;

$( document ).ready(function() {
  Marquee3k.init()
  var today = new Date();
  var eventChecker = false;


  var state = ""
   var isMobile = window.matchMedia("only screen and (max-width: 800px)");
   if (isMobile.matches) {
       state="mobile"
       $('.logo').css('height', window.innerHeight+'px');
       $('.homeContainer').css('height', window.innerHeight+'px');
       $('#IDS').css('bottom', window.innerHeight * 0.2 +'px');
       $('.currentDate').css('bottom', window.innerHeight * 0.2 +'px');
   }else{
     state="desktop"
   }
   console.log(state);
  //  $(window).resize(function() {
  //    if (isMobile.matches) {
  //        state="mobile"
  //        $('.logo').css('height', window.innerHeight+'px');
  //        $('.homeContainer').css('height', window.innerHeight+'px');
  //        $('#ids').css('top', window.innerHeight * 0.8 +'px');
  //    }else{
  //      state="desktop"
  //      $('.logo').css('height', '');
  //      $('.homeContainer').css('height', '');
  //      $('#ids').css('top', '');
  //    }
  //    console.log(state);
  //  });







 $.getJSON("database.json", function(json) {
   var container = $("<div class='eventcontainer'></div>");
  //  var myList = JSON.parse(json.speakers);
   var jsonLength = Object.keys(json.speakers).length
   var lastDate = json.speakers['speaker'+ jsonLength].fullDate;
   var finalDate = new Date(lastDate);
   finalDate.setDate(finalDate.getDate() + 1);
   var firstDate = json.speakers['speaker1'].fullDate;
   var startDate = new Date(firstDate);
   console.log(startDate);
   var i = 0;
///loop for initial load
   for (i; i < jsonLength; i++) {
///////gets json data
      var speakerID = "speaker"+(i+1);
      var speakerMonth = json.speakers[speakerID].month;
      var speakerDate = json.speakers[speakerID].date;
      var speakerName = json.speakers[speakerID].name;
      var speakerDesc = json.speakers[speakerID].description;
      var speakerImg = json.speakers[speakerID].photo;
      var speakerCred = json.speakers[speakerID].credits;
      var fullDate = json.speakers[speakerID].fullDate;

      // console.log(speakerDesc);
//////component variables
      var speaker = $('<div class="speaker" id="'+speakerID+'" data="'+(i+1)+'"></div>');
      var month = $('<div class="month">'+speakerMonth+'</div>');
      var date = $('<div class="date">'+speakerDate+'</div>');
      var name = $('<div class="name">'+speakerName+'</div>');
      var desc = $('<div class="description">'+speakerDesc+'</div>');
      var photo = $('<img class="photo" src="'+speakerImg+'"/>');

      var dateContainer = $('<div class="dateContainer"></div>');
      var title = $('<div class="title"></div>');
      var marker = $('<div class="marker"><div class="pulsate"></div></div>');
      var copy = $('<div class="copy"></div>');



      var maxDate = new Date(fullDate);
      var minDate = new Date(fullDate);
      maxDate.setDate(maxDate.getDate() + 1);
      minDate.setDate(minDate.getDate() - 6);


      if (today > minDate && today < maxDate){
        console.log('in range');
        speaker.addClass('current');
        currentSpeaker = json.speakers[speakerID].css;
        currentBack = json.speakers[speakerID].background;


        var displayDate = new Date(fullDate);

        var options = { year: 'numeric', month: 'long', day: 'numeric' };


        $('.artistName').html(speakerName);
        $('.currentDate').html(displayDate.toLocaleDateString("en-US",options));
        $('.credit').html(speakerCred);
        eventChecker = true

      }

      if (today < maxDate){
        console.log('not happened yet');
        speaker.addClass('future');
      }
      if (today > maxDate){
        console.log('event passed');
        speaker.addClass('past');
      }
      dateContainer.append(month,date);
      title.append(marker,dateContainer,name);
      copy.append(desc,photo);
      speaker.append(title,copy);
      container.append(speaker);

//////expand function

      title.click(function() {
        var containerSelect = $(this).parent()

        containerSelect.toggleClass("selected");

        $('html,body').stop().animate({
        scrollTop: $(this).offset().top  - 20
      }, 'fast','swing');

     });
   }
   $('#additional').attr({
      rel:  "stylesheet",
      type: "text/css",
      href: "css/"+currentSpeaker+".css"
    });
   $(container).prepend('<div class="marker begin"><div class="pulsate"></div></div>');
   $('.home, .artistName, .credit, .load, .ids, .about, .aboutButton, .strokeText, .professor').addClass(currentSpeaker);


  $(stroke1).addClass(currentSpeaker);
   $('.info').html(container);

   $('.speaker').addClass(currentSpeaker);


   if (today > finalDate){
     $('.spring, .info').addClass('unlocked');
   }
   if (today < startDate){
     $('.marker.begin').addClass('show');
     console.log('too early' )
   }


   console.log(currentSpeaker);
   if (eventChecker === false){
     console.log('no speaker')
     $('.home, .artistName, .credit, .load, .ids, .about, .aboutButton').addClass('noSpeaker');
   }else{
     console.log('is speaker')
   }


 });

 $('.profTitle').click(function(){
   var containerSelect = $(this).parent()
   var profID = containerSelect.prop("id");
   console.log(profID);
   $(".selected2").removeClass("selected2");
   containerSelect.addClass("selected2");

   if (profID === "omar"){
          //  $('.rose').attr('src', 'http://curatorsintl.org/images/assets/Mdc_Seminar.jpeg');
           $('.rose, .about').removeClass('leslie ');
           $('.rose, .about').addClass('omar');

   }
   if (profID === "leslie"){
          //  $('.rose').attr('src', 'http://www.sikkemajenkinsco.com/images/artwork/2833_08.jpg');
           $('.rose, .about').removeClass('omar');
           $('.rose, .about').addClass('leslie');

   }
  });
 $('.ids').click(function(){
   if ( $( this ).hasClass( "showAbout" ) ) {
   $(".selected2").removeClass("selected2");
   $('.idsBlurb').addClass("selected2");
        //  $('.rose, .about').attr('src', 'https://cooper.edu/sites/default/files/090905-Morgado-246.jpg');
         $('.rose, .about').removeClass('leslie omar');


 }
 });
 $(".ids, .idsBlurb").mouseover(function() {
   $('.ids, .idsBlurb').addClass("hovered");
 });
 $(".ids, .idsBlurb").mouseout(function() {
   $('.ids, .idsBlurb').removeClass("hovered");
 });



});
