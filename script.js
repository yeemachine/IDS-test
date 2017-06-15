$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
    $('.load').addClass('regina');
  });

$( document ).ready(function() {
  var today = new Date();
  var currentSpeaker;


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
      var photo = $('<div class="photo" style="width:50%;background-image:url('+speakerImg+')"></div>');

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
        $('.artistName').html(speakerName);
        $('.credit').html(speakerCred);

      }
      if (today < maxDate){
        console.log('not happened yet');
        speaker.addClass('future');
      }
      if (today > maxDate){
        console.log('event passed');
        speaker.addClass('past');
      }

      title.append(month,date,name);
      copy.append(desc,photo);
      speaker.append(title,copy);
      container.append(speaker);

//////expand function

      title.click(function() {
        var containerSelect = $(this).parent()
        // var selectedHeight = $('.selected').height() - $(containerSelect).height()

        // var selectedPrevious = Number.parseInt($('.selected').attr("data"));
        // var selectedThis = Number.parseInt($(containerSelect).attr("data"));
        // var scrollAmount = $(window).height() + 50 + $(window).width() * 0.1 * (selectedThis)
        // console.log(scrollAmount);
        // console.log(selectedPrevious, selectedThis);
        containerSelect.toggleClass("selected");
        // $('.selected').not(containerSelect).removeClass("selected");
////////Ugly solution to inaccurate scrollTop problem
        // if (selectedPrevious<selectedThis){
        //   console.log('hi')
        //   $('html, body').stop().animate({
        //   scrollTop: $(this).offset().top - selectedHeight - 60
        // }, 'fast');
        // }else{
        //   $('html, body').stop().animate({
        //   scrollTop: $(this).offset().top - 20
        // }, 'fast');
        // }
        $('html, body').stop().animate({
        scrollTop: $(this).offset().top  - 20
      }, 'fast');

      //   $('html, body').stop().animate({
      //   scrollTop: scrollAmount
      // }, 'fast');

     });
   }
   $('.home, .artistName, .credit, .load').addClass(currentSpeaker);
   $('.info').html(container);

   $('.speaker').addClass(currentSpeaker);
   console.log(currentSpeaker);

 });




});
