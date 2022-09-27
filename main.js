const form = document.getElementById('form-binario');
const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();

})    

function checkInputs() {

    const numero1Value = numero1.value
    const numero2Value = numero2.value

    if(numero1Value >= numero2Value) {
        document.querySelector('.fail-message').style.display = 'block';
    } else {
        document.querySelector('.sucess-message').style.display = 'block';
    }
}