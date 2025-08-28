
function simulador() {

    const contPre = document.getElementById("pre-simulation");
    const contPost = document.getElementById("post-simulation");

    contPost.classList.remove("disabled");
    contPre.classList.add("disabled");


    //VARIABLES QUE CAPTURAN LOS VALORES DE LOS CAMPOS
    let cNombres = document.getElementById("nombres").value;
    let cTelefono = document.getElementById("telefono").value;
    let cEmail = document.getElementById("email").value;
    let cMonto = document.getElementById("monto").value;
    let cTiempo = document.getElementById("tiempo").value;

    //CONSTANTES QUE CAPTURAN LAS ETIQUETAS SAPN EN LAS QUE SE MUESTRAN LOS VALORES POR ESO LA (S) DE SHOW
    const sTiempo = document.getElementById("sTiempo");
    const sInteres = document.getElementById("sInteres");
    const sTotal = document.getElementById("sTotal");
    const sGanancia = document.getElementById("sGanancia");
    const sNombres = document.getElementById("sNombres");
    const sEmail = document.getElementById("sEmail");

    //VARIABLES PARA REALIZAR LOS CALCULOS 

    let ganancia = 0;
    let total = 0;


    if (cNombres =="" || cEmail == "") {

        alert("Llene todos los campos porfavor");
        
    }
    else{

    }

    switch (cTiempo) {
        case "1":
            //EN ESTE CASE REALIZAREMOS EL CALCULO SI EL TIEMPO CORRESPONDE A 1 AÑO
            ganancia = (cMonto * 0.008) * 12;
            total = parseInt(cMonto) + parseInt(ganancia);

            sTotal.textContent = total;
            sGanancia.textContent = ganancia;

            sInteres.textContent = "0.8%";
            sTiempo.textContent = "12 MESES";

            sNombres.textContent = cNombres;
            sEmail.textContent = cEmail;

            break;

        case "2":
            //EN ESTE CASE REALIZAREMOS EL CALCULO SI EL TIEMPO CORRESPONDE A 2 AÑOS
            ganancia = (cMonto * 0.013) * 24;
            total = parseInt(cMonto) + parseInt(ganancia);

            sTotal.textContent = total;
            sGanancia.textContent = ganancia;

            sInteres.textContent = "1.3%";
            sTiempo.textContent = "24 MESES";

            sNombres.textContent = cNombres;
            sEmail.textContent = cEmail;
            break;

        case "3":
            //EN ESTE CASE REALIZAREMOS EL CALCULO SI EL TIEMPO CORRESPONDE A 3 AÑO
            ganancia = (cMonto * 0.017) * 36;
            total = parseInt(cMonto) + parseInt(ganancia);

            sTotal.textContent = total;
            sGanancia.textContent = ganancia;

            sInteres.textContent = "1.7%";
            sTiempo.textContent = "36 MESES";

            sNombres.textContent = cNombres;
            sEmail.textContent = cEmail;
            break;




    }




}


document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("calcular").addEventListener("click", simulador);
});