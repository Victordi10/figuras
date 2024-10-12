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

//creo y agrego al dom el selector de figuras
const selecFiguras = document.createElement("select")
const container = document.querySelector(".container")
container.appendChild(selecFiguras)

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
    }else{
        mostrarFiguras(fSolidos)
    }
})

//creo el formulario para insertar los datos
const formDatos = document.createElement('div')
container.appendChild(formDatos)

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
        containerInput.innerHTML = crearInput(dFPlanas, figura)
    }else{
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