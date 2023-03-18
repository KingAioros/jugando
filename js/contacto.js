//Variables
let persona = 0;
let email = false;
let formEnviar = document.getElementById("fEnviarCont");
//Se crean objetos
let crearPersona = () => { persona = new Persona ({ nombre: userName, apellido: userLastName, usuario: user, email: userMail, phone: userPhone });}

//Object
class Persona{
  constructor(literal){
    this.nombre = literal.nombre;
    this.apellido = literal.apellido;
    this.usuario = literal.usuario;
    this.email = literal.email;
    this.phone = literal.phone;
  }
}

function contacto () { 
Swal.fire({
    confirmButtonColor : "#ffb866",
    showConfirmButton: false,
    background: "transparent",

    html: `          <div class="formularioMaps">
    <form class="formulario">
      <h2 class="formularioTitle">Ingresa tus datos y te contactamos</h2>
      <div class="formularioContainer">
        <div class="grupo">
          <input type="text" id="name" class="formularioImput" placeholder=" ">
          <label for="name" class="formularioLabel">Nombre:</label>
          <span class="formularioLinea"></span>
        </div>
        <div class="grupo">
          <input type="text" id="lastName" class="formularioImput" placeholder=" ">
          <label for="lastName" class="formularioLabel">Apellido:</label>
          <span class="formularioLinea"></span>
        </div>
        <div class="grupo">
          <input type="text" id="usuario" class="formularioImput" placeholder=" ">
            <label for="usuario" class="formularioLabel">Usuario:</label>
            <span class="formularioLinea"></span>
        </div>
        <div class="grupo">
          <input type="text" id="mail" class="formularioImput" placeholder=" ">
            <label for="mail" class="formularioLabel">Email:</label>
            <span class="formularioLinea"></span>
        </div>
        <div class="grupo">
        <input type="text" id="phone" class="formularioImput" placeholder=" ">
          <label for="phone" class="formularioLabel">Tel:</label>
          <span class="formularioLinea"></span>
      </div>
        <input type="button" class="formularioEnviar" value="Envia tus datos" id = "fEnviarCont" onclick="registrar();">
      </div> 
    </form>
  </div>`,
});
}


    //Alerta mail
const alertMail = (leyenda,correo,icon) => {
    Swal.fire({
    title: `'Correo ${leyenda}'`,
    text: `"La dirección de email ${correo} es ${leyenda}!."`,
    icon: `${icon}`,
    showConfirmButton: true,
  })
    }

const datosError = (mensaje) => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        showConfirmButton: true,
        text: `${mensaje}`,
      })
}

const registroExitoso = () => {
  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'success',
    title: 'Registro completado con exito',
    showConfirmButton: true,
    timer: 1500,
    timerProgressBar: true
  })
  window.location="../page/loginWelcome.html";
}

    //Validar correo
const validarEmail = (valor) => {
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
       alertMail("válido", valor, 'success');
     email = true;
    } else {
       alertMail("invalido", valor, 'error');
     email = false;
    }
   }

   //Registrar datos
function registrar(){
     userName = document.getElementById("name").value;
     userLastName = document.getElementById("lastName").value;
     user = document.getElementById("usuario").value;
     userMail = document.getElementById("mail").value;
     userPhone = document.getElementById("phone").value;

    if (userName && userLastName && user &&userMail && userPhone != " "){
        validarEmail(userMail)
        if (email == true){
        crearPersona();
        const enJSON = JSON.stringify(persona);
        localStorage.setItem(`Usuario:${user}`, enJSON)
        localStorage.setItem(`Correo:${userMail}`, enJSON)
        registroExitoso();
        }
        else {
        console.log("correo invalido")
        }
    }
    else if(userPassword != userPasswordVerificar){
        datosError("Verifique el password");
    }
    else {
        datosError("Contiene campos sin completar");
    }
}

//Ejecutar codigo
 formEnviar.onclick = () => {
    registrar();
 }