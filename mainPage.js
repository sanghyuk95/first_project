const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
    delay: 4000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

window.onload = function () {
    $(".box").each(function () {// 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } else if (event.detail) delta = -event.detail / 3;
            var moveTop = null;
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(this).next() != undefined) {
                    moveTop = $(this).next().offset().top;
                }
            // 마우스휠을 아래에서 위로
            } else {
                if ($(this).prev() != undefined) {
                    moveTop = $(this).prev().offset().top;
                }
            }
            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 800, complete: function () {
                }
            });
        });
    });
}

const $searchButton = document.querySelector('.fa-magnifying-glass')
const $searchBar = document.querySelector('.search')
const $join = document.querySelector('.join')
const $container = document.querySelector('.container')
const $login = document.querySelector('.fa-user')
const $x = document.querySelector('.fa-xmark')

$searchButton.addEventListener('click', e => {
    $searchBar.classList.toggle('on')
})
$login.addEventListener('click', e => {
    $join.classList.toggle('hidden')
    $container.classList.toggle('black')
})
$x.addEventListener('click', e => {
    $join.classList.toggle('hidden')
    $container.classList.toggle('black')
})
