$('.img').click(function() {
  $('#clickImg').css('display','block')
  $('#content').attr("src",$(this).attr('src'));
  $('#caption').html($(this).attr('alt'));
})

$('.close').click(function() {
  $('#clickImg').css('display','none')
})

var clickClose = document.getElementById('clickImg');

window.onclick = function(close) {
  if (close.target == clickClose) {
    $('#clickImg').css('display','none');
  }
}