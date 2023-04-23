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
    },
    {
        nombre: "Pantalon",
        precio: 10000,
        disponible: true
    }
]

const busqueda = "CamISETa"

const buscarProducto = (productos, busqueda) => {
    const found = productos.find(productoArray => productoArray.nombre.toUpperCase() === busqueda.toUpperCase())
    //console.log(found)
    if (found && found.disponible === true) {
        console.log(found)
    }else if(found && found.disponible === false){
        console.log("Producto Encontrado, Stock Agotado.")
    }else{
        console.log("Producto No Encontrado.")
    }
}

buscarProducto(productos, busqueda)

/*const buscarProducto = (productos, busqueda) => {
    const found = productos.find(productoArray => productoArray.nombre.toUpperCase() === busqueda.toUpperCase())
    //console.log(found)
    if (found && found.disponible === true) {
        console.log(`Producto Encontrado. ${found}`)//No retorna correctamente
    }else if(found && found.disponible === false){
        console.log("Producto Encontrado, Stock Agotado.")
    }else{
        console.log("Producto No Encontrado.")
    }
}

buscarProducto(productos, busqueda)*/