$(window).on('beforeunload', function() {
    $(window).scrollTop(0);

    // $('.load').addClass('regina');

  });

$( document ).ready(function() {

  var today = new Date();
  var currentSpeaker;
  var eventChecker = false;



  // var maxDate1 = new Date('2017/6/23');
  // var minDate1 = new Date('2017/6/23');
  // maxDate1.setDate(maxDate1.getDate() + 1);
  // minDate1.setDate(minDate1.getDate() - 6);
  //
  // if (today > minDate1 && today < maxDate1){
  //   document.getElementsByClassName('load')[0].style.background = '#98FB98';
  // }



$('.logo').css('height', window.innerHeight+'px');

 $.getJSON("database.json", function(json) {
   var container = $("<div class='eventcontainer'></div>");
  //  var myList = JSON.parse(json.speakers);
   var jsonLength = Object.keys(json.speakers).length
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
      title.append(dateContainer,name);
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
   $('.home, .artistName, .credit, .load, .ids, .about, .aboutButton').addClass(currentSpeaker);
   $('.info').html(container);

   $('.speaker').addClass(currentSpeaker);
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
           $('.rose').attr('src', 'http://curatorsintl.org/images/assets/Mdc_Seminar.jpeg');
           $('.rose, .about').removeClass('leslie ');
           $('.rose, .about').addClass('omar');

   }
   if (profID === "leslie"){
           $('.rose').attr('src', 'http://www.sikkemajenkinsco.com/images/artwork/2833_08.jpg');
           $('.rose, .about').removeClass('omar');
           $('.rose, .about').addClass('leslie');

   }
  });
 $('.ids').click(function(){
   if ( $( this ).hasClass( "showAbout" ) ) {
   $(".selected2").removeClass("selected2");
   $('.idsBlurb').addClass("selected2");
         $('.rose, .about').attr('src', 'https://cooper.edu/sites/default/files/090905-Morgado-246.jpg');
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
