var len = $('.slider');
console.log(len);
$('#1').click(function () {
    $('#slider2').fadeOut(600, function () {
        $('#slider3').fadeOut(600, function () {
            $('#slider1').fadeIn(600);
        });
    });
});
$('#2').click(function () {
    $('#slider1').fadeOut(600, function () {
        $('#slider3').fadeOut(600, function () {
            $('#slider2').fadeIn(600);
        });
    });
});
$('#3').click(function () {
    $('#slider1').fadeOut(600, function () {
        $('#slider2').fadeOut(600, function () {
            $('#slider3').fadeIn(600);
        });
    });
});