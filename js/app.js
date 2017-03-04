
function toggleHide1() {
  $('.hide1').slideToggle();
}

var lesstext = "Read less";

$('.hide1').hide();
$('.readmore').click(toggleHide1);
