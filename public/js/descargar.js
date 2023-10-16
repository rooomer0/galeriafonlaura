const string = "https://fonandlaura.onrender.com/forms"
const local = "http://localhost:8080/forms"
$(document).ready(function () {
    console.log("js contact cargado")
    // TODO implementar validacion por tipo de campo y marcar errores  
    $("#btnEnviarRespuestas").click(function (e) {
        let nombre = $("#txtNombreApellidos").val()
        let asistencia = $("#checkAsistencia").val()
        let alergia = $("#txtAlergia").val()
        let transporte = $("#checkTransporte").val()
        let email = $("#txtEmail").val()
        let textoError = " "

        function validateEmail(value) {
            pattern = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
            if (!pattern.exec(value)) {
                textoError += "El email tiene un formato incorrecto.";
                return false;
            }
            else return true;
        }

        if (nombre === undefined || $("#txtNombreApellidos").val() == ' ' || validateEmail(email) === false) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: `Debe completar todos los campos. ${textoError}`
            }).then(() => {
                e.preventDefault()
            })
            $(".validacion-error").text("Debe completar los campos marcados con un *")
        } else {
            //mandar formulario contacto
            fetch(local, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "name": nombre,
                    "assist": asistencia,
                    "alergy": alergia,
                    "transport": transporte,
                    "email": email
                })
            })
                .then(
                    response =>
                        Swal.fire({
                            icon: 'success',
                            title: '¡Enviado!',
                            text: 'Su datos se han registrado correctamente'
                        }).then(() => {
                            console.log("gola")
                            window.location.href = "https://fonandlaura.onrender.com";
                        })
                )
        }
    })


    $.get("https://fonandlaura.onrender.com/forms", function (data) {
      /*   console.log(data.datos) */
      data.datos.forEach(element => {
            /* console.log(element)
            for (let index = 0; index < data.datos.length; index++) {
                const element2 = element[index];
                console.log(element[index])
            } */
        });
        exportWorksheet(data.datos)
        window.location.href = "https://fonandlaura.onrender.com";
        function exportWorksheet(jsonObject) {
            var myFile = "Datos-boda.xlsx";
            var myWorkSheet = XLSX.utils.json_to_sheet(jsonObject);
            var myWorkBook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(myWorkBook, myWorkSheet, "Respuestas Formulario");
            XLSX.writeFile(myWorkBook, myFile);
        }
    });

})
