// loader
window.onload = function() {
   setTimeout(function(){
     var fullscreen = document.getElementById('loader');
     fullscreen.style.display = "none";
   }, 1700);

   setTimeout(function(){
     var title = document.getElementById('title-page');
     title.style.display = "block";
   }, 1700);

   setTimeout(function(){
     var audioPlayer = document.getElementById('audio');
     audioPlayer.play();
   }, 1800);
};


// for the jitter effect animation for the start
$(function(){
  var $jittery = $('.jiterry'),
      aText    = $jittery.text().split(""),
      letters = '';

  for(var i = 0; i < aText.length; i++){
    letters += '<span>'+aText[i]+'</span>';
  }

  $jittery.empty().append(letters);

  $.each($('span', $jittery), function(i){
    $(this).css('animation-delay', '-'+i+'70ms');
  });
});

$(function(){
  var $jittery = $('.jiterry2'),
      aText    = $jittery.text().split(""),
      letters = '';

  for(var i = 0; i < aText.length; i++){
    letters += '<span>'+aText[i]+'</span>';
  }
  console.log("hi");

  $jittery.empty().append(letters);

  $.each($('span', $jittery), function(i){
    $(this).css('animation-delay', '-'+i+'70ms');
  });
});
