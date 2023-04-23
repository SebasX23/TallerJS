const contacto = {
    nombre: "Carlos",
    email: "carlosss@mail.com",
    tel: "3103664433"
}

const mostrarContacto = (contacto) => {
    const{nombre, email, tel} = contacto
    console.log(`Nombre: ${nombre} - Email: ${email} - Telefono: ${tel}`)
}

mostrarContacto(contacto)