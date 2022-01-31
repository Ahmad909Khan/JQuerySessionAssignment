textA = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eligendi, amet est ipsa culpa modi
nesciunt. Nobis, facilis consequuntur ipsum reiciendis, in dolorum, magni beatae nihil ad quidem sint
molestiae?
Eius quas eveniet ducimus, nemo dicta laborum minima dolorem, tempore unde quisquam ullam nihil ea quis
odio cum assumenda est esse autem possimus distinctio sed aspernatur magni? Natus, earum doloremque.
`
textB = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla id exercitationem itaque maxime officiis
similique, at omnis maiores, ad iure sunt sit dolores, cumque dolore voluptatem ipsa doloremque eligendi
illo!
Iusto eaque corrupti vero eligendi natus, molestiae voluptas praesentium dolore fuga facilis mollitia autem
expedita? Exercitationem suscipit fugiat labore officiis accusamus assumenda rerum cupiditate officia ipsa
expedita, voluptatum deserunt. Delectus?
`
textC = `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, harum voluptatibus qui reiciendis laboriosam
culpa. Eos, quisquam, dignissimos ratione autem ut error tempora magnam deleniti, fuga laudantium facere
consequuntur quam?
Debitis, animi et. Corporis voluptas necessitatibus facilis est molestias odio! Laboriosam incidunt cumque
voluptates atque saepe aliquid accusantium voluptatum, ipsam iure iste adipisci quisquam magnam repudiandae
aut assumenda sunt exercitationem?

`
$(document).ready(function () {
    $("#content").text(textA)
    $("#btn1").click(function () {
        $("#content").text(textA);
    });
    $("#btn2").click(function () {
        $("#content").text(textB);
    });
    $("#btn3").click(function () {
        $("#content").text(textC);
    });
    $(window).resize(function () {
        if(window.innerWidth < 768){
            $("#contentdiv").hide();
            $(".resContent").show();
            $("#btn1, #btn2, #btn3").addClass("form-control");
            $("#btn1").click(function () {
                $("#resContent1").toggle().text(textA);
            });
            $("#btn2").click(function () {
                $("#resContent2").toggle().text(textA);
            });
            $("#btn3").click(function () {
                $("#resContent3").toggle().text(textA);
            });
        }
        if(window.innerWidth > 768){
            $(".resContent").hide();
            $("#contentdiv").show();
            $("#btn1, #btn2, #btn3").removeClass("form-control");
        }
    })
})