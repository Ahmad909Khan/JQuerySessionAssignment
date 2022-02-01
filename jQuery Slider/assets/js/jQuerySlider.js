$('#1').click(function () {
    $('#slider2').finish().slideUp();
    $('#slider3').finish().slideUp();
    $('#slider1').finish().slideDown();
});
$('#2').click(function () {
    $('#slider1').finish().slideUp()
    $('#slider3').finish().slideUp()
    $('#slider2').finish().slideDown();
});
$('#3').click(function () {
    $('#slider1').finish().slideUp();
    $('#slider2').finish().slideUp()
    $('#slider3').finish().slideDown();
});