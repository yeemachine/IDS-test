$( document ).ready(function() {
$('.logo').css('height', window.innerHeight+'px');

 $.getJSON("database.json", function(json) {
   var container = $("<div class='eventcontainer'></div>");
  //  var myList = JSON.parse(json.speakers);
   var jsonLength = Object.keys(json.speakers).length
   var i = 0;
///loop for initial load
   for (i; i < jsonLength; i++) {
///////gets json data
      var speakerID = "speaker"+i;
      var speakerMonth = json.speakers[speakerID].month;
      var speakerDate = json.speakers[speakerID].date;
      var speakerName = json.speakers[speakerID].name;
      var speakerDesc = json.speakers[speakerID].description;
      var speakerImg = json.speakers[speakerID].photo;
      console.log(speakerDesc);
//////component variables
      var speaker = $('<div class="speaker" id="'+speakerID+'"></div>');
      var month = $('<div class="month">'+speakerMonth+'</div>');
      var date = $('<div class="date">'+speakerDate+'</div>');
      var name = $('<div class="name">'+speakerName+'</div>');
      var desc = $('<div class="description">'+speakerDesc+'</div>');
      var photo = $('<div class="photo" style="width:50%;background-image:url('+speakerImg+')"></div>');

      var title = $('<div class="title"></div>');
      var copy = $('<div class="copy"></div>');
      title.append(month,date,name);
      copy.append(desc,photo);
      speaker.append(title,copy);
      container.append(speaker);

//////expand function

      title.click(function() {
        var containerSelect = $(this).parent()
        var selectedHeight = window.height *.1
        $('.selected').not(containerSelect).removeClass("selected");

       containerSelect.toggleClass("selected");

       $('html, body').stop().animate({
       scrollTop: $(this).offset().top - 20
     }, 'slow');

     });

   }

   console.log(jsonLength);
   $('.info').html(container);

 });









});
