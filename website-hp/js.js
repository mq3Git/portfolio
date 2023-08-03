$('#hamburger').on('click', function(){
    $('.icon').toggleClass('close');
    if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
      $(this).removeClass('close');//クラス名を除去し
    }else{//それ以外は
      $(this).addClass('close');//クラス名closeを付与
    }
    // $('.sm').slideToggle();
    $('.sm').stop(true).animate({'width': 'toggle'});
    $('.close').css('color', '#fff')
  });
  $('.icon').on('click', function() {//タイトル要素をクリックしたら
    var findElm = $(this).next(".sm");//直後のアコーディオンを行うエリアを取得し
    $(findElm).slideToggle();//アコーディオンの上下動作
      
  });
  $('.fl a').on('click', function () {
  $('.sm').slideToggle();  
}); 

  

$(window).on('scroll',function(){

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
  
});
