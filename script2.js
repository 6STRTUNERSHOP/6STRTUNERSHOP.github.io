const factorChatarra = 1.5;
const factorMetalChatarra = 8.5;
const factorPlastico = 8;
const factorGoma = 8.3;
const factorAcero = 8.7;

// Definir la cantidad de materiales necesarios para cada item
const materiales = {
    ruedas: { chatarra: 500 },
    guardabarros: { chatarra: 475 },
    faldones: { chatarra: 500 },
    'parachoques-frontal': { chatarra: 550 },
    aleron: { chatarra: 600 },
    suspension: { acero: 60, metalChatarra: 200, goma: 150, plastico: 75 },
    frenos: { acero: 65, metalChatarra: 250, goma: 215, plastico: 115 },
    'parachoques-trasero': { chatarra: 600 },
    motor: { acero: 65, metalChatarra: 250, goma: 215, plastico: 115 },
    capot: { chatarra: 500 },
    turbo: { acero: 65, metalChatarra: 250, goma: 195, plastico: 95 },
    bocina: { chatarra: 500 },
    'caja-de-cambios': { acero: 60, metalChatarra: 200, goma: 150, plastico: 75 },
    xenon: { chatarra: 400 },
    'vidrios-polarizados': { chatarra: 400 },
    'diseno-de-neon': { chatarra: 400 },
    'placa-nueva': { chatarra: 500 },
    extras: { chatarra: 400 },
    livery: { chatarra: 550 },
    'pintura-primaria': { chatarra: 600 },
    'pintura-secundaria': { chatarra: 600 },
    'tipo-de-pintura': { chatarra: 400 },
    volante: { chatarra: 450 },
    'color-de-humo': { chatarra: 450 },
    interior: { chatarra: 550 },
    tablero: { chatarra: 450 },
    'neones-activos': { chatarra: 500 },
    'color-de-xenon': { chatarra: 400 },
    'color-neon': { chatarra: 400 },
    'spray-camaleon': { chatarra: 2000 },
    'partes-esteticas': { chatarra: 450 },
};

function calcularPrecio() {
    // Obtener la cantidad de cada item desde los campos de entrada
    const cantidadRuedas = obtenerCantidad('ruedas');
    const cantidadGuardabarros = obtenerCantidad('guardabarros');
    const cantidadFaldones = obtenerCantidad('faldones');
    const cantidadParachoquesFrontal = obtenerCantidad('parachoques-frontal');
    const cantidadAleron = obtenerCantidad('aleron');
    const cantidadSuspension = obtenerCantidad('suspension');
    const cantidadFrenos = obtenerCantidad('frenos');
    const cantidadParachoquesTrasero = obtenerCantidad('parachoques-trasero');
    const cantidadMotor = obtenerCantidad('motor');
    const cantidadCapot = obtenerCantidad('capot');
    const cantidadTurbo = obtenerCantidad('turbo');
    const cantidadBocina = obtenerCantidad('bocina');
    const cantidadCajaDeCambios = obtenerCantidad('caja-de-cambios');
    const cantidadXenon = obtenerCantidad('xenon');
    const cantidadVidriosPolarizados = obtenerCantidad('vidrios-polarizados');
    const cantidadDisenoDeNeon = obtenerCantidad('diseno-de-neon');
    const cantidadPlacaNueva = obtenerCantidad('placa-nueva');
    const cantidadExtras = obtenerCantidad('extras');
    const cantidadLivery = obtenerCantidad('livery');
    const cantidadPinturaPrimaria = obtenerCantidad('pintura-primaria');
    const cantidadPinturaSecundaria = obtenerCantidad('pintura-secundaria');
    const cantidadTipoDePintura = obtenerCantidad('tipo-de-pintura');
    const cantidadVolante = obtenerCantidad('volante');
    const cantidadColorDeHumo = obtenerCantidad('color-de-humo');
    const cantidadInterior = obtenerCantidad('interior');
    const cantidadTablero = obtenerCantidad('tablero');
    const cantidadNeonesActivos = obtenerCantidad('neones-activos');
    const cantidadColorDeXenon = obtenerCantidad('color-de-xenon');
    const cantidadColorNeon = obtenerCantidad('color-neon');
    const cantidadSprayCamaleon = obtenerCantidad('spray-camaleon');
    const cantidadPartesEsteticas = obtenerCantidad('partes-esteticas');

    // Calcular el precio total para cada item
    const precioTotalRuedas = calcularPrecioItem('ruedas', cantidadRuedas);
    const precioTotalGuardabarros = calcularPrecioItem('guardabarros', cantidadGuardabarros);
    const precioTotalFaldones = calcularPrecioItem('faldones', cantidadFaldones);
    const precioTotalParachoquesFrontal = calcularPrecioItem('parachoques-frontal', cantidadParachoquesFrontal);
    const precioTotalAleron = calcularPrecioItem('aleron', cantidadAleron);
    const precioTotalSuspension = calcularPrecioItem('suspension', cantidadSuspension);
    const precioTotalFrenos = calcularPrecioItem('frenos', cantidadFrenos);
    const precioTotalParachoquesTrasero = calcularPrecioItem('parachoques-trasero', cantidadParachoquesTrasero);
    const precioTotalMotor = calcularPrecioItem('motor', cantidadMotor);
    const precioTotalCapot = calcularPrecioItem('capot', cantidadCapot);
    const precioTotalTurbo = calcularPrecioItem('turbo', cantidadTurbo);
    const precioTotalBocina = calcularPrecioItem('bocina', cantidadBocina);
    const precioTotalCajaDeCambios = calcularPrecioItem('caja-de-cambios', cantidadCajaDeCambios);
    const precioTotalXenon = calcularPrecioItem('xenon', cantidadXenon);
    const precioTotalVidriosPolarizados = calcularPrecioItem('vidrios-polarizados', cantidadVidriosPolarizados);
    const precioTotalDisenoDeNeon = calcularPrecioItem('diseno-de-neon', cantidadDisenoDeNeon);
    const precioTotalPlacaNueva = calcularPrecioItem('placa-nueva', cantidadPlacaNueva);
    const precioTotalExtras = calcularPrecioItem('extras', cantidadExtras);
    const precioTotalLivery = calcularPrecioItem('livery', cantidadLivery);
    const precioTotalPinturaPrimaria = calcularPrecioItem('pintura-primaria', cantidadPinturaPrimaria);
    const precioTotalPinturaSecundaria = calcularPrecioItem('pintura-secundaria', cantidadPinturaSecundaria);
    const precioTotalTipoDePintura = calcularPrecioItem('tipo-de-pintura', cantidadTipoDePintura);
    const precioTotalVolante = calcularPrecioItem('volante', cantidadVolante);
    const precioTotalColorDeHumo = calcularPrecioItem('color-de-humo', cantidadColorDeHumo);
    const precioTotalInterior = calcularPrecioItem('interior', cantidadInterior);
    const precioTotalTablero = calcularPrecioItem('tablero', cantidadTablero);
    const precioTotalNeonesActivos = calcularPrecioItem('neones-activos', cantidadNeonesActivos);
    const precioTotalColorDeXenon = calcularPrecioItem('color-de-xenon', cantidadColorDeXenon);
    const precioTotalColorNeon = calcularPrecioItem('color-neon', cantidadColorNeon);
    const precioTotalSprayCamaleon = calcularPrecioItem('spray-camaleon', cantidadSprayCamaleon);
    const precioTotalPartesEsteticas = calcularPrecioItem('partes-esteticas', cantidadPartesEsteticas);

    // Calcular el precio total
    const precioTotal = precioTotalRuedas +
                       precioTotalGuardabarros +
                       precioTotalFaldones +
                       precioTotalParachoquesFrontal +
                       precioTotalAleron +
                       precioTotalSuspension +
                       precioTotalFrenos +
                       precioTotalParachoquesTrasero +
                       precioTotalMotor +
                       precioTotalCapot +
                       precioTotalTurbo +
                       precioTotalBocina +
                       precioTotalCajaDeCambios +
                       precioTotalXenon +
                       precioTotalVidriosPolarizados +
                       precioTotalDisenoDeNeon +
                       precioTotalPlacaNueva +
                       precioTotalExtras +
                       precioTotalLivery +
                       precioTotalPinturaPrimaria +
                       precioTotalPinturaSecundaria +
                       precioTotalTipoDePintura +
                       precioTotalVolante +
                       precioTotalColorDeHumo +
                       precioTotalInterior +
                       precioTotalTablero +
                       precioTotalNeonesActivos +
                       precioTotalColorDeXenon +
                       precioTotalColorNeon +
                       precioTotalSprayCamaleon +
                       precioTotalPartesEsteticas;

    // Mostrar el precio total
    document.getElementById('precio-total').textContent = precioTotal.toFixed(2);

    // Calcular y mostrar la cantidad total de materiales
    const materialesTotales = calcularMaterialesTotales();
    const materialesList = document.getElementById('materiales-list');
    materialesList.innerHTML = '';

    for (const material in materialesTotales) {
        const cantidadMaterial = materialesTotales[material];
        const li = document.createElement('li');
        li.textContent = `${material}: ${cantidadMaterial} unidades`;
        materialesList.appendChild(li);
    }
}

function calcularPrecioItem(item, cantidad) {
    const materialesItem = materiales[item];
    let precioTotal = 0;

    for (const material in materialesItem) {
        const factor = obtenerFactor(material);
        precioTotal += materialesItem[material] * factor * cantidad;
    }

    return precioTotal;
}

function obtenerFactor(material) {
    switch (material) {
        case 'chatarra':
            return factorChatarra;
        case 'metalChatarra':
            return factorMetalChatarra;
        case 'plastico':
            return factorPlastico;
        case 'goma':
            return factorGoma;
        case 'acero':
            return factorAcero;
        default:
            return 0;
    }
}

function calcularMaterialesTotales() {
    const materialesTotales = {};

    for (const item in materiales) {
        const cantidad = obtenerCantidad(item);
        actualizarMaterialesTotales(materialesTotales, item, cantidad);
    }

    return materialesTotales;
}

function actualizarMaterialesTotales(materialesTotales, item, cantidad) {
    const materialesItem = materiales[item];

    for (const material in materialesItem) {
        if (materialesTotales.hasOwnProperty(material)) {
            materialesTotales[material] += materialesItem[material] * cantidad;
        } else {
            materialesTotales[material] = materialesItem[material] * cantidad;
        }
    }
}

function obtenerCantidad(id) {
    const valor = parseFloat(document.getElementById(id).value);
    return isNaN(valor) ? 0 : valor;
}
