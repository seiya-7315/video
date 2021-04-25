// 画像hoverで動画ポップアップ
$(function () {
    $('.video_wrapper').hide();
    $('.seiya').hover(
    function () {
        $(this).children('.video_wrapper').fadeIn('fast');
    },
    function () {
        $(this).children('.video_wrapper').fadeOut('fast');
    });
});

// 動画hoverで動画自動再生
$(document).on({
    mouseenter:function(){
        $(this).find('.video')[0].play(); 
    },
    mouseleave:function(){
        $(this).find('.video')[0].pause();
    }
},'.video_wrapper');