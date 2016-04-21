$(function () {
    $('.image-slider img:gt(0)').hide();
    setInterval(function () {
            $('.image-slider :first-child').fadeOut(500)
                .next('img').fadeIn()
                .end().appendTo('.image-slider');
        },
        3000);
});