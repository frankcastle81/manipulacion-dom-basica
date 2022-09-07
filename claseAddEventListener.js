const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btnCalculo = document.querySelector('#btnCalcular')
const btnReset = document.querySelector('#btnLimpiar')
const pResultado = document.querySelector('#result');

form.addEventListener('submit', btnCalcular);

function btnCalcular(event){
    //console.log({event});
    event.preventDefault();
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResultado.innerText = "Resultado: " + sumaInputs;
    //console.log(sumaInputs);
}

btnReset.addEventListener('click', btnLimpiar)

function btnLimpiar(event){
    //eventlimpiar.preventDefault();
    input1.value = "";
    input2.value = "";
    pResultado.innerText = "Resultado: ";
}


// Codigo antiguo
// function btnOnClick(){
//     //console.log('Ejecutando el evento de click');
//     //console.log(input1.value + input2.value);
//     const sumaInputs = input1.value + input2.value;
//     pResultado.innerText = "Resultado: " + sumaInputs;
// }
