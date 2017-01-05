$(document).ready(function (){

  var positionDiv = $('#resume-about').offset();
  console.log(positionDiv.left);

    $(window).scroll(function (){
      if ($(this).scrollTop() > positionDiv.left){
        addAnime($('#resume-about'));
      }
    });

});


function addAnime(input){

  $(input).addClass('animated bounceInUp');
}
