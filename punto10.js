//Crear una función llamada "reemplazarLetras" que tome un string y dos letras como parámetros. La
//función debe reemplazar todas las apariciones de la primera letra en el string por la segunda letra y
//devolver el string modificado. Luego, crear una variable "mensaje" con un string y llamar a la función
//con el mensaje, la letra "a" y la letra "o" como parámetros. Imprimir en la consola el string modificado.
function reemplazarLetras(mensaje, letra1, letra2) {
    let nuevoMensaje = mensaje
    for (let i = 0; i < nuevoMensaje.length; i++) {
        nuevoMensaje = nuevoMensaje.replace(letra1, letra2)
        
    }
    console.log(nuevoMensaje)
}

const mensaje = "trinitrotolueno"

reemplazarLetras(mensaje, "o", "a")