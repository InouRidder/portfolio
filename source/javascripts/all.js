//= require jquery
//= require bootstrap-sprockets
//= require_tree .

$(document).ready(function(){
  var $Menu = $('.Img');
  $('.Img').mouseenter(function() {
    $('.PopUp').css('opacity', '1');
    $('.PopUp').css('margin-top', '20px');
  });

  $('.Img').mouseleave(function() {
    $('.PopUp').css('opacity', '0');
    $('.PopUp').css('margin-top', '0px');
  });

  $('.Img').on('click', function() {
    if($Menu.hasClass('Img')){
      $('.Img').addClass('click');
      $('.Img').removeClass('Img');
      $('.Profile').addClass('clickProfile');
      $('.Profile').removeClass('Profile');
      $('.clickPopUp').css('display', 'block');
      $('.PopUp').css('display', 'none');
    }
    else {
      $('.click').addClass('Img');
      $('.click').removeClass('click');
      $('.clickProfile').addClass('Profile');
      $('.clickProfile').removeClass('clickProfile');
      $('.clickPopUp').css('display', 'none');
      $('.PopUp').css('display', 'block');
    }
  });




  $(".tab").on("click", function(e){
    e.preventDefault()
    var thisTarget = $(this).data("target")
    // Change active tab
    $('.tab').removeClass('active');
    $(this).addClass('active');
    // Hide all tab-content (use class="hidden")
    $('.tab-content').addClass('hidden');
    // Show target tab-content (use class="hidden")
    $(thisTarget).removeClass('hidden');
  });
});



