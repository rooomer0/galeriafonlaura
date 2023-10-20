$(document).ready(function () {
    $("#containerDescubre").hide();
    $("#btnSubirFoto").click(function () {
        $("#containerSubirFoto").toggle();
        $("#containerDescubre").toggle();
        $("#btnSubirFoto").prop('disabled', true);
        $("#btnDescubre").prop('disabled', false);
    });

    $("#btnDescubre").click(function () {
        $("#containerSubirFoto").toggle();
        $("#containerDescubre").toggle();
        $("#btnDescubre").prop('disabled', true);
        $("#btnSubirFoto").prop('disabled', false);
    });

    $.get("https://galeriafonlaura.onrender.com/upload", function (data) {

        for (let index = 0; index < data.data.length; index++) {
            const element = data.data[index];
            if (element.includes("foto")) {
                //console.log(element)
                $("#containerSubirFoto").append(
                    `<div class="imgContainer">
                <img class="imgDesc" src="../${element}">
                </div>  `
                )
            }
        }
    });

    $("#boton").click(function(){
        const formElement = document.querySelector("#myFile");
        const request = new XMLHttpRequest();
        request.open("POST", "https://galeriafonlaura.onrender.com/upload");
        request.send(new FormData(formElement));
        console.log("enviado")
        location.reload();
    })
});