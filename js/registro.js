let datos = JSON.parse(localStorage.getItem('usuario'));

const formulario = document.getElementById("formulario")

const listar = document.getElementById("listar")

const boton = document.getElementById('boton')
boton.addEventListener("click", (e) => {
  e.preventDefault();
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let telefono = document.getElementById("telefono").value;
  let direccion = document.getElementById("direccion").value;
  let observaciones = document.getElementById("observaciones").value;


  let registro = {
    Nombres: nombre,
    Apellidos: apellido,
    Telefono: telefono,
    Direccion: direccion,
    Observaciones: observaciones
  }
  console.log(datos)
  if (datos == null) {
    let auxiliar = [];
    auxiliar.push(registro)
    localStorage.setItem("usuario", JSON.stringify(auxiliar))
  }
  else {
    datos.push(registro)

    localStorage.setItem("usuario", JSON.stringify(datos))
    listarDatos();
  }
  
});