function sumar() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    
    var resultado = num1 + num2;
    
    document.getElementById("resultado").innerText = resultado;
}

function restar() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    
    var resultado = num1 - num2;
    
    document.getElementById("resultado").innerText = resultado;
}

function multiplicar() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    
    var resultado = num1 * num2;
    
    document.getElementById("resultado").innerText = resultado;
}

function dividir() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    
    if (num2 === 0) {
        document.getElementById("resultado").innerText = "Error: No se puede dividir entre 0";
    } else {
        var resultado = num1 / num2;
        
        document.getElementById("resultado").innerText = resultado;
    }
}