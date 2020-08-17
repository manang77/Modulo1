

function rellenar() {
    document.getElementById("name").value = "Manuel Angel";
    document.getElementById("apellidos").value = "Espejo Artacho";
    document.getElementById("avatar").src = "./img/avatar.png"
}

function mostrarConsola() {

    var nombre = document.getElementById('name').value;
    var apellidos =  document.getElementById('apellidos').value;

    if (nombre == "" || apellidos == "") {
        window.alert("Introducir Nombre y Apellidos");
    }
    else {
        console.log(nombre + ' ' + apellidos);
    }
    
}

function limpiarCampos() {
    document.getElementById("avatar").src = "";
    document.getElementById('name').value = null;
    document.getElementById('apellidos').value = null;
}