$(function () {
    var swiper = new Swiper('.slide ', {
        speed: 3000,//버튼을 슬라이드가 넘어가는 시간
        autoplay: {
            delay: 2500,//자동으로 넘어가기 전 머무르는 시간
            disableOnInteraction: false,
        },
        loop: true,//슬라이드 무한반복
        navigation: {//화살표 버튼
            nextEl: '.slide .swiper-button-next',
            prevEl: '.slide .swiper-button-prev',
        },
        pagination: {//블릿 버튼
            el: '.slide .swiper-pagination',
            clickable: true,
        },
    });
});

$(function () {
    var swiper = new Swiper('.gallery .gallery_inner ', {
        slidesPerView: 3,//보여지는 갤러리 수
        spaceBetween: 0,//갤러리 사이 간격
        speed: 1500,//버튼을 슬라이드가 넘어가는 시간
        autoplay: {
            delay: 2500,//자동으로 넘어가기 전 머무르는 시간
            disableOnInteraction: false,
        },
        loop: true,//슬라이드 무한반복
    });
});

$(function () {
    var swiper = new Swiper('.slide2 ', {
        speed: 3000,//버튼을 슬라이드가 넘어가는 시간
        autoplay: {
            delay: 2500,//자동으로 넘어가기 전 머무르는 시간
            disableOnInteraction: false,
        },
        loop: true,//슬라이드 무한반복
    });
});

$(function () {
    var swiper = new Swiper('.slide3 ', {
        speed: 3000,//버튼을 슬라이드가 넘어가는 시간
        autoplay: {
            delay: 2500,//자동으로 넘어가기 전 머무르는 시간
            disableOnInteraction: false,
        },
        loop: true,//슬라이드 무한반복
    });
});


