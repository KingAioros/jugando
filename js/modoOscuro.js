/*Modo oscuro*/
let modo=document.getElementById("modoVis")

modo.addEventListener ("click", function(){
    if (modo.className.includes("fa-suna")){
        modo.className= "fa-moona";
        modo.title="Modo oscuro activo";
        dayNightColor('--color-1','#D6D3E7');
        dayNightColor('--color-2','#5A5972');
        dayNightColor('--color-3','rgb(255, 182, 47)');
        dayNightColor('--color-pagina','#302D3E');
        dayNightColor('--color-titulo','darkgray');
        dayNightColor('--color-texto','darkgray');
        dayNight("Icons/night.png");
        
    } else {
        modo.className="fa-suna";
        modo.title="Modo claro activo";
        dayNightColor('--color-1', 'rgb(253, 131, 93)');
        dayNightColor('--color-2', 'rgb(214, 106, 106)');
        dayNightColor('--color-3', '#d86060');
        dayNightColor('--color-pagina', 'rgb(255, 239, 234)');
        dayNightColor('--color-titulo','rgb(146, 0, 0)');
        dayNightColor('--color-texto', 'black');
        dayNight("Icons/sun.png");
    }
})

function dayNight (lightNight) {
    document.querySelector("#dayNight").setAttribute("src",lightNight);
};

const dayNightColor = (lightNight,lightNight2) => {
    document.documentElement.style.setProperty(lightNight, lightNight2);
}