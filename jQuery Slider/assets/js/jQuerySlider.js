var len = $('.slider');
console.log(len);
$('#1').click(function () {
    $('#slider2').slideUp(300, function () {
        $('#slider3').slideUp(300, function () {
            $('#slider1').slideDown(300);
        });
    });
});
$('#2').click(function () {
    $('#slider1').slideUp(300, function () {
        $('#slider3').slideUp(300, function () {
            $('#slider2').slideDown(300);
        });
    });
});
$('#3').click(function () {
    $('#slider1').slideUp(300, function () {
        $('#slider2').slideUp(300, function () {
            $('#slider3').slideDown(300);
        });
    });
});