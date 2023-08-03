$('#hamburger').on('click', function(){
    $('.icon').toggleClass('close');
    if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
      $(this).removeClass('close');//クラス名を除去し
    }else{//それ以外は
      $(this).addClass('close');//クラス名closeを付与
    }
    // $('.sm').slideToggle();
    $('.sm').stop(true).animate({
      opacity: 'toggle',
    }, 'nomal');
  });
  $('.icon').on('click', function() {//タイトル要素をクリックしたら
    var findElm = $(this).next(".sm");//直後のアコーディオンを行うエリアを取得し
    $(findElm).fadeIn();//アコーディオンの上下動作
      
  });
  $('.fl a').on('click', function () {
  $('.sm').fadeOut();  
}); 


$(window).on('scroll',function(){
//   var scrollTop = window.pageYOffset ; 
//   if (scrollTop > 200 ) { 
//     $('header').css('background-color', '#ffffff');
//     $('header').css('transition', '.5s')
//   }  //スクロール量を取得
//   if (scrollTop < 199 ) { 
//     $('header').css('background-color', '#ffffff00');
//     $('header').css('transition', '.5s')
//   }
// });
  

// $(window).on('scroll', function(){
//   var scrollTop = window.pageYOffset ; 
//   if (scrollTop > 200 ) { 
//     $('header').css('background-color', '#fff');
//     $('header').css('transition', '.5s')
//   }  //スクロール量を取得
//   if (scrollTop < 199 ) { 
//     $('header').css('background-color', '#ffffff00');
//     $('header').css('transition', '.5s')
//   }
var scrollTop = window.pageYOffset ; 
  if (scrollTop > 200 ) { 
    $('totop').css('opacity', '1');
    $('totop').css('transition', '.5s')
  }  //スクロール量を取得
  if (scrollTop < 199 ) { 
    $('totop').css('opacity', '0');
    $('totop').css('transition', '.5s')
  }
});


  $(".blur").each(function(){
    var position = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > position - windowHeight + 300){
      $(this).addClass('blurActive');
    }
  });

  $(".fade").each(function(){
    var position = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > position - windowHeight + 300){
      $(this).addClass('fadeActive');
    }
  });

  $(".fadeup").each(function(){
    var position = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > position - windowHeight + 300){
      $(this).addClass('fadeupActive');
    }
  });

  $(".zoomin").each(function(){
    var position = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > position - windowHeight + 300){
      $(this).addClass('zoominActive');
    }
  });
  
  $(".slidein").each(function(){
    var position = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > position - windowHeight + 300){
      $(this).addClass('slideinActive');
    }
  });


document.addEventListener('DOMContentLoaded', function() {
  var prevButton = document.querySelector('.prev');
  var nextButton = document.querySelector('.next');
  var trainerSlide = document.getElementById('slide-trainer');
  var staffSlide = document.getElementById('slide-staff');

  prevButton.addEventListener('click', function() {
    trainerSlide.style.display = 'block';
    staffSlide.style.display = 'none';
    prevButton.classList.add('active');
    nextButton.classList.remove('active');
  });

  nextButton.addEventListener('click', function() {
    trainerSlide.style.display = 'none';
    staffSlide.style.display = 'block';
    prevButton.classList.remove('active');
    nextButton.classList.add('active');
  });
});


$(document).ready(function() {
  $('.accordion-header').click(function() {
    var accordionItem = $(this).parent('.accordion-item');
    accordionItem.toggleClass('active');
    accordionItem.find('.accordion-content').slideToggle(300);
    $(this).find('.arr').toggleClass('active');
  });
});


$(function(){
  //--------------------------------------------------------------------------------
  // マウスホイールで横スクロール処理
  //--------------------------------------------------------------------------------
  // スクロール後の位置
  var moving;
  // スクロール後の位置+余韻の距離
  var aftermov;
  // 余韻の距離
  var after = 200;
  // 1スクロールの移動距離
  var speed = 30;
  // アニメーション
  var animation = 'easeOutCirc';
  // アニメーションスピード
  var anm_speed = 500;
  // 前回のスクロール位置
  var lastmov = 0;
  $('.scroll-container').mousewheel(function(event, mov) {
      //  スクロール後の位置の算出
      var moving = $(this).scrollLeft() - mov * speed;
      // スクロールする
      $(this).scrollLeft(moving);
      // 余韻の計算
      if (mov < 0) {
          // 下にスクロールしたとき
          aftermov =  moving + after;
      } else {
          // 上にスクロールしたとき
          aftermov =  moving - after;
      }
      // 横スクロールの終端まで来たら、縦スクロールに切り替える処理
      // スクロール位置が前回の位置と同じかどうかチェックし
      // 同じだったら、縦スクロールする
      // 違うなら、横スクロールする
      if(lastmov == aftermov) {
          // 縦スクロール
          return true;
      } else {
          // 余韻アニメーション
          $(this).stop().animate({scrollLeft: aftermov}, anm_speed, animation);
          lastmov = aftermov;
          // 縦スクロールさせない
          return false;
      }
  });
});

function toggleVolume() {
  var volumeUpButton = document.querySelector('.on');
  var volumeOffButton = document.querySelector('.off');
  var audio = document.getElementById('onoff');

  volumeUpButton.style.display = 'none';
  volumeOffButton.style.display = 'block';
  audio.pause();
}

document.addEventListener('DOMContentLoaded', function() {
  var volumeUpButton = document.querySelector('.on');
  var volumeOffButton = document.querySelector('.off');

  volumeUpButton.addEventListener('click', toggleVolume);
  volumeOffButton.addEventListener('click', function() {
    volumeUpButton.style.display = 'block';
    volumeOffButton.style.display = 'none';
    document.getElementById('onoff').play();
  });
});