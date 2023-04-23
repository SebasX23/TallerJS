const palabra = "ciclotrimetilentrinitramina"

const convertirPalabra = (palabra) => {
    const capitalized = palabra.charAt(0).toUpperCase() + palabra.slice(1)
    console.log(capitalized)
}

convertirPalabra(palabra)