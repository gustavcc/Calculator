var um = document.getElementById('um');
var dois = document.getElementById('dois');
var tres = document.getElementById('tres');
var quatro = document.getElementById('quatro');
var cinco = document.getElementById('cinco');
var seis = document.getElementById('seis');
var sete = document.getElementById('sete');
var oito = document.getElementById('oito');
var nove = document.getElementById('nove');

var soma = document.getElementById('soma');
var subtrair = document.getElementById('subtrair');
var dividir = document.getElementById('dividir');
var multiplicar = document.getElementById('multiplicar');
var c = document.getElementById('C');

var resultado = document.getElementById('result');

function mostrarResultado(x) {
    var numero = document.getElementById('result').innerHTML;
    resultado.innerHTML = numero + x;
}

function limparResultado() {
    c.addEventListener('click', () => {
        resultado.innerHTML = '';
    })
}