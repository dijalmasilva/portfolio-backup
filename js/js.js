$(document).ready(function (){

  var positionResumeAbout = $('#resume-about').offset();
  var positionExperience1 = $('#experience1').offset();
  var positionExperience2 = $('#experience2').offset();
  var positionEducation1 = $('#education1').offset();

    $(window).scroll(function (){
      var positionScroll = $(this).scrollTop();
      var diference = $(window).height() + 40;
      if (positionScroll > positionResumeAbout.top - diference){
        addAnime($('#resume-about'), 'bounceInUp');
      }

      if (positionScroll > positionExperience1.top - diference){
        addAnime($('#experience1'), 'bounceInRight');
      }

      if (positionScroll > positionExperience2.top - diference){
        addAnime($('#experience2'), 'bounceInLeft');
      }

      if (positionScroll > positionEducation1.top - diference){
        addAnime($('#education1'), 'bounceInRight');
      }
    });

});


function addAnime(input, effect){

  $(input).addClass('animated '+ effect);
}
