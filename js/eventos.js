//Evento que cambia el comportamiento del display
let botones = document.getElementsByClassName('vista');
for(let i=0; i<botones.length; i++){
    botones[i].addEventListener('click', function () {
        let identificador = botones[i].id;
        let padre = botones[i].parentNode;
        let abuelo= padre.parentNode;
        let elementoVisibilidad = abuelo.children[1];
        
        switch (identificador) {
            case 'mostrarInfo':
                elementoVisibilidad.style.display="block";
                mostrarInfo.style.display="none";
                ocultarInfo.style.display="block";
                break;
            case 'ocultarInfo':
                elementoVisibilidad.style.display="none";
                ocultarInfo.style.display="none";
                mostrarInfo.style.display="block";
                break;
            case 'mostrarExpLab':
                elementoVisibilidad.style.display="block";
                mostrarExpLab.style.display="none";
                ocultarExpLab.style.display="block";
                break;
            case 'ocultarExpLab':
                elementoVisibilidad.style.display="none";
                ocultarExpLab.style.display="none";
                mostrarExpLab.style.display="block";
                break;
            case 'mostrarCursos':
                elementoVisibilidad.style.display="block";
                mostrarCursos.style.display="none";
                ocultarCursos.style.display="block";
                break;
            case 'ocultarCursos':
                elementoVisibilidad.style.display="none";
                ocultarCursos.style.display="none";
                mostrarCursos.style.display="block";
                break;
            case 'mostrarEstudios':
                elementoVisibilidad.style.display="block";
                mostrarEstudios.style.display="none";
                ocultarEstudios.style.display="block";
                break;
            case 'ocultarEstudios':
                elementoVisibilidad.style.display="none";
                ocultarEstudios.style.display="none";
                mostrarEstudios.style.display="block";
                break;
        }
    }, false);
};
