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