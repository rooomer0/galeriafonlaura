$(document).ready(function () {
    $("#containerDescubre").hide();
    $("#btnDescubre").toggleClass("activo")
    $("#btnSubirFoto").click(function () {
        $("#containerSubirFoto").toggle();
        $("#containerDescubre").toggle();
        $("#btnSubirFoto").prop('disabled', true);
        $("#btnSubirFoto").toggleClass("activo")
        $("#btnDescubre").prop('disabled', false);
        $("#btnDescubre").toggleClass("activo")
    });

    $("#btnDescubre").click(function () {
        $("#containerSubirFoto").toggle();
        $("#containerDescubre").toggle();
        $("#btnDescubre").prop('disabled', true);
        $("#btnDescubre").toggleClass("activo")
        $("#btnSubirFoto").prop('disabled', false);
        $("#btnSubirFoto").toggleClass("activo")
        location.reload();
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
    })
    
});