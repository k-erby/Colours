// for the jitter effect animation for the start
$(function(){
  var $jittery = $('.jittery'),
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
  var $jittery = $('.jittery2'),
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
