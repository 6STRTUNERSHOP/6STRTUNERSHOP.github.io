// Función para calcular el costo total de los productos mecánicos
function calcularTotalMecanica() {
    const productosMecanicos = [
        { id: 'puerta', precio: 60 },
        { id: 'neumatico', precio: 60 },
        { id: 'maletero', precio: 60 },
        { id: 'capot', precio: 60 },
        { id: 'discoEmbrague', precio: 500 },
        { id: 'radiador', precio: 500 },
        { id: 'filtroCombustible', precio: 500 },
        { id: 'chapasMetalicas', precio: 60 },
        { id: 'partesMotor', precio: 60 },
        { id: 'ejeTransmision', precio: 60 },
        { id: 'pastillasFreno', precio: 500 }
    ];

    let total = 0;

    productosMecanicos.forEach(producto => {
        const cantidad = parseInt(document.getElementById(producto.id).value);
        if (!isNaN(cantidad)) {
            total += cantidad * producto.precio;
        }
    });

    return total;
}

function calcularTotalHerramientas() {
    const productosHerramientas = [
        { id: 'ganzua', precio: 550 },
        { id: 'gato', precio: 300 },
        { id: 'kitReparacion', precio: 300 },
        { id: 'kitReparacionAvanzado', precio: 1350 },
        { id: 'ganzua2', precio: 1500 },
        { id: 'ganzua2M', precio: 400 },
        { id: 'ruedasdrift', precio: 350 },
        { id: 'ruedasnormales', precio: 350 }
    ];

    let total = 0;

    productosHerramientas.forEach(producto => {
        const cantidad = parseInt(document.getElementById(producto.id).value);
        if (!isNaN(cantidad)) {
            if (producto.id === 'ganzua2' && document.getElementById('ganzua2M').checked) {
                total += cantidad * productosHerramientas.find(item => item.id === 'ganzua2M').precio;
            } else {
                total += cantidad * producto.precio;
            }
        }
    });

    return total;
}

// Función para mostrar el resultado en la página
function mostrarResultado() {
    const totalMecanica = Math.round(calcularTotalMecanica() * 1.0);
    const totalHerramientas = calcularTotalHerramientas();
    const totalGeneral = totalMecanica + totalHerramientas;

    document.getElementById('resultadoTotalMecanica').textContent = totalMecanica;
    document.getElementById('resultadoTotalHerramientas').textContent = totalHerramientas;
    document.getElementById('resultadoTotalGeneral').textContent = totalGeneral;
}

// Asociar la función mostrarResultado al botón de calcular
const botonCalcular = document.querySelector('.btn-light');
botonCalcular.addEventListener('click', mostrarResultado);

const botonCalcular2 = document.querySelector('.btn-dark');
botonCalcular2.addEventListener('click', mostrarResultado);

