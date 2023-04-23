const alumno = {
    nombre: "Santiago",
    edad: 27,
    notas: [2, 4.5, 3]
}

function calcularPromedio(alumno) {
    const{notas} = alumno
    let sum = 0
    notas.forEach(nota => {
        sum += nota
    });
    
    const prom = sum / notas.length
    if (prom >= 7) {
        console.log("Aprobó")
    }else if (prom >= 0 && prom <= 6) {
        console.log("Reprobó")
    }else{
        console.log("Error")
    }
}

calcularPromedio(alumno)