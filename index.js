function Welcome(dates) {
    console.log("<!--Welcome 2-->")
    console.table(dates);
    if (dates.Nombre) {
        console.log(dates.Nombre);
    } else {
        console.log('Faltan datos')
    }

    if (dates.Edad) {
        console.log(dates.Edad);
    } else {
        console.log('Faltan datos')
    }

    if (dates.Ciudad) {
        console.log(dates.Ciudad)
    } else {
        console.log('No hay datos');
    }; 
}

function Welcome2(nombre, edad, ciudad) {
    console.log("<!--Welcome 2-->")
    if (nombre) {
        console.log(nombre);
    } else  {
        console.log('Faltan datos W2')
    }
    if (edad) {
        console.log(edad);
    } else  {
        console.log('Faltan datos W2')
    }
    if (ciudad) {
        console.log(ciudad);
    } else {
        console.log('No hay datos');
    } 
};

let John = {
    Nombre: "John",
    Edad: 30,
    Ciudad: "Bogota"
};

Welcome({
    Nombre: "Alexi",
    Edad: 20,
    Ciudad: "Bucaramanga"
});

Welcome2(John.Nombre, John.Edad, John.Ciudad);