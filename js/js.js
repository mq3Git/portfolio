$('#hamburger').on('click', function(){
    $('.icon').toggleClass('close');
    if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
      $(this).removeClass('close');//クラス名を除去し
    }else{//それ以外は
      $(this).addClass('close');//クラス名closeを付与
    }
    $('.sm').slideToggle();
  });
    $('.fl a').on('click', function () {
    $('.sm').slideToggle();
    $('.icon').removeClass('.close');
    if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
      $(this).removeClass('close');//クラス名を除去し
    }else{//それ以外は
      $(this).addClass('close');//クラス名closeを付与
    }
  }); 
  $('.icon').on('click', function() {//タイトル要素をクリックしたら
    var findElm = $(this).next(".sm");//直後のアコーディオンを行うエリアを取得し
    $(findElm).slideToggle();//アコーディオンの上下動作
      
    if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
      $(this).removeClass('close');//クラス名を除去し
    }else{//それ以外は
      $(this).addClass('close');//クラス名closeを付与
    }
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
  
});

// Macy({
//   container: '#macy',
// 	trueOrder: false,
// 	waitForImages: false,
// 	useOwnImageLoader: false,
// 	margin: {
// 		x: 4,
// 		y: 4
// 	},
// 	columns: 4,
// 	breakAt: {
// 		1200: {columns: 5},
// 		940: {columns: 3},
// 		740: {columns: 2}
// 	}
// });

// Macy({
//   container: '#macyweb',
// 	trueOrder: false,
// 	waitForImages: false,
// 	useOwnImageLoader: false,
// 	margin: {
// 		x: 4,
// 		y: 4
// 	},
// 	columns: 4,
// 	breakAt: {
// 		1200: {columns: 5},
// 		940: {columns: 3},
// 		740: {columns: 2}
// 	}
// });


window.addEventListener('load', function(){
  if(/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())){
    var script = $('<script>').attr({
      'type': 'text/javascript',
      'src': 'https://cdn.jsdelivr.net/npm/mailtoui@1.0.3/dist/mailtoui-min.js'
    });
    $('body')[0].appendChild(script[0]);
  }
});


//画像をクリックしたら現れる画面の設定	
$(".gallery-list").modaal({
	fullscreen:'true', //フルスクリーンモードにする
	before_open:function(){// モーダルが開く前に行う動作
		$('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
	},
	after_close:function(){// モーダルが閉じた後に行う動作
		$('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
	}
});


// 広告キラー
(function(){
  window.opera.addEventListener('BeforeScript',function(){
    event.preventDefault();
  },false);
})();



