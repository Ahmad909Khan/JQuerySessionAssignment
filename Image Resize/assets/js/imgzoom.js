img = $('#zoom-image')
$('.pop-up').hide();
$(document).ready(function () {
    $('#main-image').click(function () {
        $('#img-container').hide();
        $('.pop-up').show();
        img.width('400px')
    })
    $('.fa-times').click(function () {
        $('#img-container').show();
        $('.pop-up').hide();
    })
    $('.fa-plus').click(function () {
        if(img.width() >= 2000)
        alert('Maximum size reached')
        else
        img.css("width", "+=100px")
    })
    $('.fa-minus').click(function () {
        if(img.width() <= 300)
        alert('Minimun size reached')
        else
        img.css("width", "-=100px")
    })
})