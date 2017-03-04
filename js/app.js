/*
function toggleHide1() {
  $('.hide1').slideToggle();
}

var lesstext = "Read less";

$('.hide1').hide();
$('.readmore').click(toggleHide1);*/

$(document).ready(function(){
    $('.readmore').click(function(){
        $(this).next().slideToggle('slow', function() {
        if ($(this).is(':visible')) {
             $('.readmore').text('Read less >');
        } else {
             $('.readmore').text('Read more >');
        }
    	});
    });
});
