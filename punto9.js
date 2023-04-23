const productos = [
    {
        nombre: "Aguacate",
        precio: 7500,
        disponible: true
    },
    {
        nombre: "Moto",
        precio: 7000000,
        disponible: false
    },
    {
        nombre: "Mouse",
        precio: 30000,
        disponible: true
    }
]
const prodsFiltrados = (productos, precioMax) => {
    return productos.filter(producto => producto.precio <= precioMax)
}

console.log(prodsFiltrados(productos, 10000))