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
  var scrollTop = window.pageYOffset ; 
  if (scrollTop > 200 ) { 
    $('header').css('background-color', '#21054D');
    $('header').css('transition', '.5s')
  }  //スクロール量を取得
  if (scrollTop < 199 ) { 
    $('header').css('background-color', '#ffffff00');
    $('header').css('transition', '.5s')
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

const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  slides[index].classList.add('active');
}

function createDots() {
  slides.forEach((slide, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === currentIndex) {
      dot.classList.add('active-dot');
    }
    dot.addEventListener('click', () => {
      currentIndex = index;
      showSlide(currentIndex);
      updateDots();
    });
    dotsContainer.appendChild(dot);
  });
}

function updateDots() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add('active-dot');
    } else {
      dot.classList.remove('active-dot');
    }
  });
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);
  updateDots();
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
  updateDots();
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

showSlide(currentIndex);
createDots();

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  slides[index].classList.add('active');
  slides[index].style.opacity = 0; // 初期状態を透明にする

  setTimeout(() => {
    slides[index].style.opacity = 1; // アニメーションでフェードイン
  }, 100);
}
