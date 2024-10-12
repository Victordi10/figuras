//selecctor de tipo de figuras
const tipo = document.getElementById('tipo')
console.log(tipo.value)

//figuras
const fPlanas = ['cuadrado','rectangulo','circulo','triangulo']
const fSolidos = ['cubo','esfera','cilindro']

//datos necesarios
const datosNecesarios = ['lado','largo','ancho','radio','base','altura','radioB'];

//datos necesarios por figura
const dFPlanas = {
    0:[0],
    1:[1,2],
    2:[3],
    3: [4,5]
}
const dFSolidos = {
    0:[0],
    1:[3],
    2:[6,5]
}

//variable para evitar duplicado de los titulos
let countTitle = 0
//funcion para crear las secciondes 
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

//agrego evento para mostras las opciones
tipo.addEventListener("input",()=>{
    if(tipo.value == 1){
        mostrarFiguras(fPlanas)
        mostrarInputs()

    }else{
        mostrarFiguras(fSolidos)
        mostrarInputs()
    }
})

//creo el formulario para insertar los datos
const formDatos = document.createElement('div')


//funcion para crear dinamicamente los inpus
const crearInput = (datosFiguras, figura)=>{
    //obtengo el array por figura
    let dArray = datosFiguras[figura];
    let inputsHtml = ''
    dArray.forEach(dato=>{
        //creo y imprimos los inpust
        inputsHtml += `
            <label for='I${datosNecesarios[dato]}' class='labelDato'>${datosNecesarios[dato]}</label>
            <input type="text" class='inputDato' id='I${datosNecesarios[dato]}'>
        `;
    })
    return inputsHtml;
}
//muestro los input segun la figura
const mostrarInputs = ()=>{
    //limpio el formulario
    formDatos.innerHTML = ''
    let figura = selecFiguras.value;
    const containerInput = document.createElement("div")
    formDatos.appendChild(containerInput)

    if(tipo.value == 1){
        crearContenido('Hayar perimetro y area',formDatos)
        containerInput.innerHTML = crearInput(dFPlanas, figura)
    }else{
        crearContenido('Hayar volumen solido',formDatos)
        containerInput.innerHTML = crearInput(dFSolidos, figura)
    }
}

//agrego evento para mostras los inpus
selecFiguras.addEventListener("input",()=>{
    mostrarInputs()
})
window.addEventListener("DOMContentLoaded",()=>{
    mostrarFiguras(fPlanas)
    mostrarInputs()
})