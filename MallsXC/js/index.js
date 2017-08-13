$(function () {
    // swiper-animate-effect：切换效果，例如 fadeInUp
    // swiper-animate-duration：可选，动画持续时间（单位秒），例如 0.5s
    // swiper-animate-delay：可选，动画延迟时间（单位秒），例如 0.3s

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        mousewheelControl: true,
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    });


})