const productos = [
    {
        nombre: "Camisa",
        precio: 10000,
        disponible: true
    },
    {
        nombre: "Camiseta",
        precio: 12000,
        disponible: true 
    }
]

const producto = {
    nombre: "Pantalon",
    precio: 10000,
    disponible: true
}

const agregarProducto = (producto, productos) => {
    const result = productos.find(productoArray => productoArray.nombre === producto.nombre)
    if (result) {
        console.log("Ya está registrado")
        console.log(productos)
    }else{
        productos.push(producto)
        console.log(productos)
    }
}

agregarProducto(producto, productos)