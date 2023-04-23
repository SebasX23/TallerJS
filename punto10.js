function reemplazarLetras(mensaje, letra1, letra2) {
    let nuevoMensaje = mensaje
    for (let i = 0; i < nuevoMensaje.length; i++) {
        nuevoMensaje = nuevoMensaje.replace(letra1, letra2)
        
    }
    console.log(nuevoMensaje)
}

const mensaje = "trinitrotolueno"

reemplazarLetras(mensaje, "o", "a")