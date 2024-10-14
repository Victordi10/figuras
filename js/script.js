//selecctor de tipo de figuras
const tipo = document.getElementById('tipo')
console.log(tipo.value)

//almaceno las figuras para luego cargarlas
const fPlanas = ['cuadrado', 'rectangulo', 'circulo', 'triangulo', 'trapecio', 'rombo', 'pentagono', 'hexagono'];
const fSolidos = ['cubo', 'esfera', 'cilindro', 'pirámide', 'cono', 'prisma'];

//datos necesarios genéricamente para pedir en los inputs
const datosNecesarios = ['lado', 'largo', 'ancho', 'radio', 'base', 'altura', 'radioB', 'alturaP', 'ladoB', 'ladoC'];

//datos necesarios por figura, guardo como propiedad cada figura y el array para los datos necesarios
const dFPlanas = {
    0: [0],           // cuadrado: lado
    1: [1, 2],       // rectángulo: largo, ancho
    2: [3],          // círculo: radio
    3: [4, 5],       // triángulo: base, altura
    4: [1, 4, 5],    // trapecio: largo, base, altura
    5: [0, 4],       // rombo: lado, altura
    6: [0, 1],       // pentágono: lado, altura
    7: [0, 1]        // hexágono: lado, altura
};

const dFSolidos = {
    0: [0],           // cubo: lado
    1: [3],          // esfera: radio
    2: [6, 5],       // cilindro: radio, altura
    3: [4, 5],       // pirámide: base, altura
    4: [3, 5],       // cono: radio, altura
    5: [0, 1, 2]     // prisma: base, altura, lado (suponiendo que la base es un triángulo)
};

//variable para evitar duplicado de los titulos y contenido
let countTitle = 0
//funcion para crear las secciones del form
const crearContenido =(texto, contenido)=>{
    countTitle++
    console.log(countTitle)
    if(countTitle < 3){
        const seccionForm = document.createElement('div')
        seccionForm.classList.add("seccion_form")

        const seccionTitulo = document.createElement('p')
        seccionTitulo.textContent = texto
        seccionTitulo.classList.add(`formTitlt${countTitle}`)

        seccionForm.appendChild(seccionTitulo)
        seccionForm.appendChild(contenido) 
        container.appendChild(seccionForm)
    }else{
        document.querySelector('.formTitlt2').textContent = texto
    }
    
}

//creo y agrego al dom el selector de figuras
const container = document.querySelector("#formFiguras")
const selecFiguras = document.createElement("select")
selecFiguras.id = 'selectFiguras' 
crearContenido('Seleccione las figuras',selecFiguras)


//funcion para mostrar la seleccion de figuras
const mostrarFiguras = (figuras)=>{
    selecFiguras.innerHTML = ''
    figuras.forEach((figura, index) =>{
        const opcion = document.createElement("option")
        opcion.value = index;
        console.log(index)
        opcion.textContent = figura;
        selecFiguras.appendChild(opcion)
    })
}

//agrego evento para mostras las opciones al cambiar tipo
tipo.addEventListener("input",()=>{
    if(tipo.value == 1){
        mostrarFiguras(fPlanas)
        mostrarInputs()
        mostrarFormas()

    }else{
        mostrarFiguras(fSolidos)
        mostrarInputs()
        mostrarFormas()
    }
})

//creo el formulario para insertar los datos con inputs
const formInputDatos = document.createElement('form')
formInputDatos.classList.add('formInputDatos')

//funcion para crear dinamicamente los inpus
const crearInput = (datosFiguras, figura)=>{
    //obtengo el array por figura
    let dArray = datosFiguras[figura];
    let inputsHtml = ''
    dArray.forEach(dato=>{
        //creo y imprimos los inpust
        inputsHtml += `
            <div>
                <label for='I${datosNecesarios[dato]}' class='labelDato'>${datosNecesarios[dato]}</label>
                <input type="text" class='inputDato' id='I${datosNecesarios[dato]}'>
            </div>
        `;
    })
    return inputsHtml;
}
//muestro los input segun la figura seleccionada
const mostrarInputs = ()=>{
    //limpio el formulario
    formInputDatos.innerHTML = ''
    let figura = selecFiguras.value;
    
    if(tipo.value == 1){
        crearContenido('Hayar perimetro y area',formInputDatos)
        formInputDatos.innerHTML = crearInput(dFPlanas, figura)
    }else{
        crearContenido('Hayar volumen solido',formInputDatos)
        formInputDatos.innerHTML = crearInput(dFSolidos, figura)
    }
}

//agrego evento para mostras los inputs segun la figura seleccionada
selecFiguras.addEventListener("input",()=>{
    mostrarInputs()
    mostrarFormas()
})
window.addEventListener("DOMContentLoaded",()=>{
    mostrarFiguras(fPlanas)
    mostrarInputs()
    mostrarFormas()
})

//mostrar forma atraves de clase de css 
const mostrarFormas =()=>{
    let figura = selecFiguras.value;
    const forma = document.getElementById("forma")
    forma.className = '';

    
    if(tipo.value == 1){
        let fArray = fPlanas[figura]
        forma.classList.add(fArray)
    }else{
        let fArray = fSolidos[figura]
        forma.classList.add(fArray)
    }
}