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
});