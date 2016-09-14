'use strict'

$(document).ready(function(){
  $('.bxslider').bxSlider({ 
    pagerCustom : '#slider_pages_wrap',
    // page : ,
    controls : 0
    });

  window.sr = new ScrollReveal();
  sr.reveal('.figure',{
    duration: 500,
    origin: 'left',
    distance: '20px',
    scale       : 0.7,
  });
});