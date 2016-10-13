'use strict'

function navMenuHover(){
  $('.top-nav-span').hover(function(){
    var index = $('.top-nav-span').index(this);

    if(index >= 0 && index <= 5){
    $(".top-nav-span").eq(index).toggleClass('top-nav-span_active');
    } else {};
  });

  $('#cart').hover(function(){
    $(".cart").toggleClass('cart_hover');
    }); 
  // $('#cart').hover(function(){
  //   $(".top-nav-item__back:nth-child(6)").addClass('top-nav-item__back_active');
  //   $(".top-nav-item:nth-child(6) a").addClass('top-nav-span_active');
  //   $(".cart").addClass('cart_hover');
  // });

  $('.login span').hover(function(){
    var index = $('.login-text').index(this);
    
    $('.login-text').eq(index).toggleClass('login-text_active');
  });
}

function brandSelectClick(){
  $('.select-header').click(function(){
    var index = $('.select-header').index(this);
    // var menuIndex = $('.menu').eq(index);
    // var menuHeight = $('.menu').eq(index).css('height');
    // console.log(menuHeight);
    
    $('.select-header span').eq(index).toggleClass('select_close');
    $('.menu').eq(index).toggleClass('menu_close');
    // if(!(menuHeight == '0px')){
    //   TweenLite.to(menuIndex, 0.15, {height:"0px"});
    // }else{
    //   TweenLite.to(menuIndex, 0.15, {height:menuStartHeight});
    // }

  });
}

function menuItemSelect(){
  $('.select-label').mouseup(function(e){
    var index = $('.select-label').index(this);
    $('.label-check').eq(index).toggleClass('label-check_active');
  });
}

function woomanOrManClick(){
  console.log('pop');
  $('.wooman-button').click(function(){
  console.log('pop');

    $('.wooman-button .button__inside-field').toggleClass('button__inside-field_w-active');
  });
  $('.man-button').click(function(){
    $('.button__inside-field_man').toggleClass('button__inside-field_m-active');
  });
}

/////////////////////////
// let group = {
//   title: "Наш курс",
//   students: ["Вася", "Петя", "Даша"],

//   showList: function() {
//     this.students.forEach(function(student) {
//       alert(group.title + ': ' + student); // будет ошибка
//     })
//   }
// }
/////////////////////////
$(document).ready(function(){
  $('.bxslider').bxSlider({ 
    pager : 0,
    controls : 0,
    tickerHover: 1,
    auto: 1,
    autoHover: 1
    });

  window.sr = new ScrollReveal();
  sr.reveal('.index-figure',{
    duration: 500,
    origin: 'left',
    distance: '20px',
    scale       : 0.7,
  });
    
  $(".owl-carousel").owlCarousel({
    items: 3,
    loop: 1,
    autoplay: 1,
    autoplayHoverPause: 1,
    margin: 15,
    nav: 1,
    navRewind: 0,
    navText: ['<span class="owl-left"></span>','<span class="owl-right"></span>'],
  });

  
  navMenuHover();
  brandSelectClick();
  woomanOrManClick();
  menuItemSelect();
});