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


// Obtén el select de las figuras
const selectFiguras = document.getElementById("selectFiguras");
// Botón para calcular
const botonCalcular = document.getElementById("botonCalcular");

// Función para obtener el valor de un input por su id
const obtenerValorInput = (id) => {
    const input = document.getElementById(`I${id}`);
    return input ? parseFloat(input.value) : 0; // Devuelve 0 si no existe el input
};

// Función para calcular el área según la figura seleccionada
botonCalcular.addEventListener("click", () => {
    const figuraSeleccionada = selectFiguras.value; // Obtén el valor del select

    let resultado;
    //dependiendo el tipo de figura acciono
    if(tipo.value == 1){
            // Dependiendo de la figura, recoge los valores de los inputs y calcula
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


            default:
                alert("Por favor selecciona una figura válida.");
                break;
        }

        if (resultado !== undefined) {
            const divResultado = document.getElementById("resultado").innerHTML = `El área es: ${resultado}`
        }
    }
});