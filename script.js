/**
 * PASSO A PASSO
 * 
 * 1 - CAPTURAR O ELEMENTO INPUT COM O TEMPO
 * 2 - FAZER UMA FUNÇÃO QUE MOSTRA O TEMPO DO INPUT
 * 3 - ADICIONAR UM EVENTO NO INPUT PARA MOSTRAR OS MESES NA TELA
 * 
 * 
 */

const InputTempo = document.querySelector(".inputSlideTempo")
let pontosacumulados = 0

function MostrarTempo(){
    let spanTempo = document.querySelector(".contagemtempo")
    spanTempo.innerText = `${InputTempo.value} meses`
}

InputTempo.addEventListener("change", MostrarTempo)

const button = document.getElementsByClassName("simulatorButton")[0]
console.log(button)

function calcularPontos(){
    const inputValor = document.getElementById("valorInput").value
    
    const pontosDia = document.querySelector("#pontosDia")
    const pontosMes = document.querySelector("#pontosMes")

    const meses = InputTempo.value
    
    if(meses == 0) {
         pontosMes.innerText = 0
         if(inputValor < 40){
            pontosDia.innerText = 0
         } else{
            let resultado = inputValor / 40
            pontosDia.innerText = resultado
         }
    } else{
        if(inputValor < 40){
            pontosDia.innerText = 0
            pontosMes.innerText = 0
        } else{
            let resultado = inputValor / 40
            pontosDia.innerText = resultado

            let totalMensal = resultado * 30
            pontosacumulados = pontosacumulados + totalMensal
            pontosMes.innerText = pontosacumulados
        }

    }
 
}

button.addEventListener("click", calcularPontos)
