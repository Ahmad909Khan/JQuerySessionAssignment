$(document).ready(function() {
    $("#btn1").click(function(){
        $("#content1").show();
        $("#content2").hide();
        $("#content3").hide();
    })
    $("#btn2").click(function(){
        $("#content1").hide();
        $("#content2").show();
        $("#content3").hide();
    })
    $("#btn3").click(function(){
        $("#content1").hide();
        $("#content2").hide();
        $("#content3").show();
    })
})