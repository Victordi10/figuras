//creo las funciones para hayar el area y perimetros de las figuras planas
const cuadradoA = (lado)=>{
    return lado ** 2;
}
const rectanguloA = (largo, ancho)=>{
    return largo * ancho;
}
const circuloA = (radio)=>{
    return 3.1416 * radio ** 2
}
const trianguloA = (base, altura)=>{
    return (base * altura) / 2;
}
const trapecioA = (largo, base, altura) => {
    return ((largo + base) / 2) * altura; // Fórmula del área de un trapecio
};

const romboA = (lado, altura) => {
    return lado * altura; // Fórmula del área de un rombo (paralelogramo)
};

const pentagonoA = (lado, altura) => {
    return (5 * lado * altura) / 2; // Fórmula aproximada del área de un pentágono regular
};

const hexagonoA = (lado, altura) => {
    return (6 * lado * altura) / 2; // Fórmula aproximada del área de un hexágono regular
};

//funcionees para hayar el volumen
const cuboV = (lado) => {
    return lado ** 3;
};
const esferaV = (radio) => {
    return (4 / 3) * 3.1416 * radio ** 3;
};
const cilindroV = (radio, altura) => {
    return 3.1416 * radio ** 2 * altura;
};
const piramideV = (base, altura) => {
    return (1 / 3) * base * altura;
};
const conoV = (radio, altura) => {
    return (1 / 3) * 3.1416 * radio ** 2 * altura;
};
const prismaV = (base, altura, lado) => {
    return (1 / 2) * base * altura * lado;
};


// Obtén el select de las figuras
const selectFiguras = document.getElementById("selectFiguras");

// Función para obtener el valor de un input por su id
const obtenerValorInput = (id) => {
    const input = document.getElementById(`I${id}`);
    return input ? parseFloat(input.value) : 0; // Devuelve 0 si no existe el input
};

//trage el boton desde script.js
// Función para calcular el área según la figura seleccionada
botonCalcular.addEventListener("click", () => {
    const figuraSeleccionada = selectFiguras.value; // Obtén el valor del select

    let resultado;

    // Verifica si es una figura plana (tipo == 1)
    if (tipo.value == 1) {
        switch (figuraSeleccionada) {
            case "0": // Cuadrado
                const lado = obtenerValorInput('lado');
                resultado = cuadradoA(lado);
                break;

            case "1": // Rectángulo
                const largo = obtenerValorInput('largo');
                const ancho = obtenerValorInput('ancho');
                resultado = rectanguloA(largo, ancho);
                break;

            case "2": // Círculo
                const radio = obtenerValorInput('radio');
                resultado = circuloA(radio);
                break;

            case "3": // Triángulo
                const base = obtenerValorInput('base');
                const altura = obtenerValorInput('altura');
                resultado = trianguloA(base, altura);
                break;

            case "4": // Trapecio
                const largoTrap = obtenerValorInput('largo');
                const baseTrap = obtenerValorInput('base');
                const alturaTrap = obtenerValorInput('altura');
                resultado = trapecioA(largoTrap, baseTrap, alturaTrap);
                break;

            case "5": // Rombo
                const ladoRombo = obtenerValorInput('lado');
                const alturaRombo = obtenerValorInput('altura');
                resultado = romboA(ladoRombo, alturaRombo);
                break;

            case "6": // Pentágono
                const ladoPenta = obtenerValorInput('lado');
                const alturaPenta = obtenerValorInput('altura');
                resultado = pentagonoA(ladoPenta, alturaPenta);
                break;

            case "7": // Hexágono
                const ladoHexa = obtenerValorInput('lado');
                const alturaHexa = obtenerValorInput('altura');
                resultado = hexagonoA(ladoHexa, alturaHexa);
                break;

            default:
                alert("Por favor selecciona una figura válida.");
                break;
        }

        if (resultado !== undefined) {
            document.getElementById("resultado").innerHTML = `El área es: ${resultado}`;
        }
    }else{
        switch (figuraSeleccionada) {
            case "0": // Cubo
                const ladoCubo = obtenerValorInput('lado');
                resultado = cuboV(ladoCubo);
                break;

            case "1": // Esfera
                const radioEsfera = obtenerValorInput('radio');
                resultado = esferaV(radioEsfera);
                break;

            case "2": // Cilindro
                const radioCilindro = obtenerValorInput('radioB');
                const alturaCilindro = obtenerValorInput('altura');
                resultado = cilindroV(radioCilindro, alturaCilindro);
                break;

            case "3": // Pirámide
                const basePiramide = obtenerValorInput('base');
                const alturaPiramide = obtenerValorInput('altura');
                resultado = piramideV(basePiramide, alturaPiramide);
                break;

            case "4": // Cono
                const radioCono = obtenerValorInput('radio');
                const alturaCono = obtenerValorInput('altura');
                resultado = conoV(radioCono, alturaCono);
                break;

            case "5": // Prisma
                const basePrisma = obtenerValorInput('base');
                const alturaPrisma = obtenerValorInput('altura');
                const ladoPrisma = obtenerValorInput('lado');
                resultado = prismaV(basePrisma, alturaPrisma, ladoPrisma);
                break;

            default:
                alert("Por favor selecciona una figura válida.");
                break;
        }

        if (resultado !== undefined) {
            document.getElementById("resultado").innerHTML = `El volumen es: ${resultado}`;
        }
    }
});