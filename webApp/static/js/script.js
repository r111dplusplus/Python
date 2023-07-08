// ヒーローイメージをスライドショーにする
$(function(){
    // 画像の数を取得
    var slideNum = $('.hero img').length;
    // 現在表示されている画像のインデックス番号
    var currentNum = 0;
    // 次に表示する画像のインデックス番号
    var nextNum = 1;
    // 画像の表示位置を設定
    $('.hero img').css('left', '100%');
    $('.hero img').eq(currentNum).css('left', 0);
    // 画像をフェードインしながらスライドさせる
    function slide(){
        $('.hero img').eq(currentNum).animate({
            'left': '-100%'
        }, 1500);
        $('.hero img').eq(nextNum).animate({
            'left': 0
        }, 1500);
        currentNum = nextNum;
        nextNum++;
        // 最後の画像まで表示されたら最初の画像を表示する
        if(nextNum >= slideNum){
            nextNum = 0;
        }
    }
    setInterval(slide, 3000);
    // ハンバーガーメニュー
    $('.hamburger').click(function(){
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            $('.header-nav').addClass('active');
        }else{
            $('.header-nav').removeClass('active');
        }
    });
});