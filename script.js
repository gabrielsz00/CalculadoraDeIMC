var peso = document.getElementById('peso');
var altura = document.getElementById('altura');
var calcular = document.getElementById('calcular');
var imctotal = document.getElementById('imctotal');
var resultado = document.getElementById('resultado');




calcular.addEventListener('click', () => {
    altura.value
    imc = peso.value / ((altura.value / 100) * (altura.value / 100));
    imctotal.textContent = imc.toFixed(2)

    if (imc < 18.5) {
    resultado.textContent = 'Abaixo do peso'
    resultado.style.color = 'royalblue'
    resultado.style.backgroundColor = 'rgb(187, 187, 187)'    
    } 
    else if (imc >= 18.5 && imc <= 24.9){
    resultado.textContent = 'Peso normal'
    resultado.style.color = 'green'
            resultado.style.backgroundColor = 'rgb(250, 250, 250)'
    }
    else if (imc >= 25 && imc <= 29.9){
        resultado.textContent = 'Excesso de peso'
        resultado.style.color = 'yellow'
        resultado.style.backgroundColor = 'rgb(187, 187, 187)'
    }
    else if (imc >= 30 && imc <= 34.9){
        resultado.textContent = 'Obesidade classe I'
            resultado.style.color = 'orange'
            resultado.style.backgroundColor = 'black'
    }
    else if (imc >= 35 && imc <= 39.9){
        resultado.textContent = 'Obesidade classe II'
                    resultado.style.color = 'rgb(255, 123, 0)'
                    resultado.style.backgroundColor = 'black'
    }
    else{
        resultado.textContent = 'Obesidade mórbida'
                    resultado.style.color = 'red'
                            resultado.style.backgroundColor = 'black'
    }





})