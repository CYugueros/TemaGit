function holaMundo(){
    /*Abre una ventana emergente*/

    alert ("Hola Mundo, primer programa en java. Jeje")
}

/*
Modificación de William
*/

function sumar() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let sum = Number(num1) + Number(num2);
    document.getElementById('Resultado').innerHTML = "La suma es: " + sum;
}

function restar() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resta = Number(num1) - Number(num2);
    document.getElementById('Resultado').innerHTML = "La resta es: " + resta;
}

function multiplicar() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let multiplicacion = Number(num1) * Number(num2);
    document.getElementById('Resultado').innerHTML = "La multiplicación es: " + multiplicacion;
}

function dividir() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let division = Number(num1) / Number(num2);
    document.getElementById('Resultado').innerHTML = "La división es: " + division;
}



 