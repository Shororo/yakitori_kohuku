$(function(){

//ヘッダー
//windowサイズが変化するごとにjQueryの動作を変更する判定
var timer = false;
var currentWidth = window.innerWidth;
$(window).resize(function() {
 if (currentWidth == window.innerWidth) {
        // ウインドウ横幅が変わっていないため処理をキャンセル。
        // safariでリロードされる現象を防ぐ
        return;
      }else if (timer !== false) {
        clearTimeout(timer);
      }
      timer = setTimeout(function() {
        location.reload();
      }, 200);
    });

	//現在の画面サイズ
  var winW = $(window).width();
  //判定基準にしたい画面サイズ
  var devW = 1023;
  
  if (winW <= devW) {
    //720px以下の時の処理  
    $(document).on('click',function(e) {
     if(!$(e.target).closest('.navigation').length) {
     // ターゲット要素の外側をクリックした時の操作
     $("nav").slideUp();
     $(".nav-cover").slideUp();
   } else {
     // ターゲット要素をクリックした時の操作
     $("nav").slideToggle();
     $(".nav-cover").slideToggle();
   }
 });
	//スマホ用navここまで


  //スムーススクロール
    $(document).ready(function(){
  //URLのハッシュ値を取得
  var urlHash = location.hash;
  //ハッシュ値があればページ内スクロール
  if(urlHash) {
    //スクロールを0に戻す
    $('body,html').stop().scrollTop(0);
    setTimeout(function () {
      //ロード時の処理を待ち、時間差でスクロール実行
      scrollToAnker(urlHash) ;
    }, 100);
  }
  //a要素をクリックしたら
  $('a[href^="#"]').click(function() {
    //ページ内リンク先を取得
    var href= $(this).attr("href");
    //スクロールしたくないa要素は以下のif文にハッシュを入力してスクロール実行を阻止しよう
    if(href != '#carouselExampleControls'){
    //リンク先が#か空だったらhtmlに
    var hash = href == "#" || href == "" ? 'html' : href;
    //スクロール実行
    scrollToAnker(hash);
    //リンク無効化
    return false;
  }
  });

  // 関数：スムーススクロール
  // 指定したアンカー(#ID)へアニメーションでスクロール
  function scrollToAnker(hash) {
    $("nav").slideUp();
    $(".nav-cover").slideUp();
    var target = $(hash);
    var position = target.offset().top;
    $('body,html').stop().animate({scrollTop:position}, 500);
  }
});

	
} else {
  //720pxより大きい時の処理
  
  	//navをheaderの中に入れる
  	$("nav").insertAfter(".navigation");

    //画面をクリックするとheaderが隠れる
    $(document).on('click',function() {
    	$("header:not(:animated)").slideToggle();
    });

		//上にスライドでheader出現
		//下にスライドでheader隠れる
		var startPos = 0,winScrollTop = 0;
    $(window).on('scroll',function(){
      winScrollTop = $(this).scrollTop();
      if (winScrollTop > startPos) {
        $('header:not(:animated)').slideUp();
      } else {
        $('header:not(:animated)').slideDown();
      }
      startPos = winScrollTop;
    });

    $("footer ul li a").on('click',function() {
      $("header:not(:animated)").slideDown();
    });

  }


  //スムーススクロール
    $(document).ready(function(){
  //URLのハッシュ値を取得
  var urlHash = location.hash;
  //ハッシュ値があればページ内スクロール
  if(urlHash) {
    //スクロールを0に戻す
    $('body,html').stop().scrollTop(0);
    setTimeout(function () {
      //ロード時の処理を待ち、時間差でスクロール実行
      scrollToAnker(urlHash) ;
    }, 100);
  }
  //a要素をクリックしたら
  $('a[href^="#"]').click(function() {
    //ページ内リンク先を取得
    var href= $(this).attr("href");
    //スクロールしたくないa要素は以下のif文にハッシュを入力してスクロール実行を阻止しよう
    if(href != '#carouselExampleControls'){
    //リンク先が#か空だったらhtmlに
    var hash = href == "#" || href == "" ? 'html' : href;
    //スクロール実行
    scrollToAnker(hash);
    //リンク無効化
    return false;
  }
  });

  // 関数：スムーススクロール
  // 指定したアンカー(#ID)へアニメーションでスクロール
  function scrollToAnker(hash) {
    var target = $(hash);
    var position = target.offset().top;
    $('body,html').stop().animate({scrollTop:position}, 500);
  }
});

  });