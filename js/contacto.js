//Variables
let persona = 0;
let email = false;
let nameValidar = false;
let phoneValidar = false;
let formEnviar = document.getElementById("fEnviarCont");
//Se crean objetos
let crearPersona = () => { persona = new Persona ({ nombre: userName, apellido: userLastName, email: userMail, phone: userPhone });}

//Object
class Persona{
  constructor(literal){
    this.nombre = literal.nombre;
    this.apellido = literal.apellido;
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
  console.log("OK")
}

    //Validar correo
const validarEmail = (valor) => {
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
     email = true;
    } else {
       alertMail("invalido", valor, 'error');
     email = false;
    }
   }

   const validarDatos = (dato) => {
    if(new RegExp('^[A-Z]+$', 'i').test(dato)){
      nameValidar = true;
     } else {
        datosError("El nombre o apellido solo puede contener letras");
      nameValidar = false;
     }
    }

     const validarPhone = (datoPhone) => {
       if(new RegExp('^[0-9]+$', 'i').test(datoPhone)){
         phoneValidar = true;
        } else {
           datosError("Solo puede contener caracteres numericos");
         phoneValidar = false;
        }
       }

   //Registrar datos
function registrar(){
     userName = document.getElementById("name").value;
     userLastName = document.getElementById("lastName").value;
     userMail = document.getElementById("mail").value;
     userPhone = document.getElementById("phone").value;

    if((userName == "") || (userLastName == "") || (userMail == "") || (userPhone == "")){
        datosError("Contiene campos sin completar");
    }

    else if (userName && userLastName &&userMail && userPhone != " "){
        validarDatos(userName);
        validarDatos(userLastName);
        validarPhone(userPhone);
        validarEmail(userMail);
        if (email == true && nameValidar == true && phoneValidar == true){
        crearPersona();
        const enJSON = JSON.stringify(persona);
        localStorage.setItem(`Correo:${userMail}`, enJSON)
        registroExitoso();
        }
        else {
        console.log("Uno o más datos pueden ser incorrectos")
        }
    }
    else {
      datosError("Contiene campos sin completar o caracteres invalidos")
      }
}

//Ejecutar codigo
 formEnviar.onclick = () => {
    registrar();
 }