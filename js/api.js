//Se declaran variables
let foto, nombre, apellido, genero, pais, provincia, calle, numero;
let correoElect, fechaNac, edad, telMovil, seed;

//Se optienen datos de la API
$.ajax({
    url: 'https://randomuser.me/api/?nat=br',
    dataType: 'json',
    success: function(data) {

        foto = data.results[0].picture.large;
        apellido= data.results[0].name.last;
        nombre = data.results[0].name.first;
        genero = data.results[0].gender;

        fechaNac = data.results[0].dob.date.slice(0,10);
        edad = data.results[0].dob.age;
        pais = data.results[0].location.country;
        provincia = data.results[0].location.state;
        calle = data.results[0].location.street.name;
        numeroCalle = data.results[0].location.street.number;
        correoElect = data.results[0].email;
        telMovil = data.results[0].cell;

        fotoPerfil.src=foto;
        apellidoPersona.innerText=apellido;
        nombrePersona.innerText=nombre;
        generoPersona.innerText=genero;
        nacimientoPersona.innerText=fechaNac +" ("+edad+" años)";
        callePersona.innerText=calle +" "+numeroCalle +", "+provincia+", "+pais ;
        correoElectPersona.innerText=correoElect;
        telMovilPersona.innerText=telMovil;

        seed = data.info.seed;
        
    }
});