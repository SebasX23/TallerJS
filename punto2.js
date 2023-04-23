const precio = 10000
const cupon = {
    codigo: "DESCUENTO2",
    descuento: 5000
}

const {codigo, descuento} = cupon

const calcularDescuento = (precio) => {
    
    if (codigo == "DESCUENTO20") {
        precio -= descuento
        console.log("Cupón Aceptado.")
        console.log(`Precio Final: ${precio}$`)
    } else {
        console.log("Cupón Inválido.")
        console.log(`Precio Final: ${precio}S`)
    }
}

calcularDescuento(precio, cupon)