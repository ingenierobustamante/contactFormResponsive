let inputDato = document.querySelectorAll('.input__dato');
let parrEmail = document.getElementById('pEmail');
let inputRadio= document.querySelectorAll('.input__radio');
let textAreaD = document.querySelector('.textarea');
let casVerifa = document.querySelector('.ckb');
let requerido = document.querySelectorAll('.required');
let varEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
let contador;

document.getElementById('contactForm').addEventListener('submit', (evt) => {
    evt.preventDefault();
    contador = 0;
    validarNombreApellido();
    validarEmail();
    validarQueryTye();
    validarMessage();
    validarCasilla();
    validacionOK();
});

function validarNombreApellido(){
    parrEmail.innerText = 'This field is required';
    for ( let i = 0 ; i < 3; i++){
        if ( inputDato[i].value === '' ){
            inputDato[i].style.outlineColor = 'hsl(0, 66%, 54%)';
            requerido[i].style.display = 'block';
            contador++;
        }else{
            inputDato[i].style.outlineColor = 'hsl(186, 15%, 59%)';
            requerido[i].style.display = 'none';
        }
    }
}

function validarEmail(){
    if ( inputDato[2].value != '' ){
        if ( !inputDato[2].value.match(varEmail)){
            inputDato[2].style.outlineColor = 'hsl(0, 66%, 54%)';
            requerido[2].style.display = 'block';
            parrEmail.innerText = 'Please enter a valid email address';
            contador++;
        }
    }
}

function validarQueryTye(){
    if ( !inputRadio[0].checked && !inputRadio[1].checked ){
        requerido[3].style.display = 'block';
        contador++;
    }else
        requerido[3].style.display = 'none';
}

function validarMessage(){
    if ( textAreaD.value == '' ){
        requerido[4].style.display = 'block';
        contador++;
    }else
        requerido[4].style.display = 'none';
}

function validarCasilla(){
    if ( !casVerifa.checked ){
        requerido[5].style.display = 'block';
        contador++;
    }else
        requerido[5].style.display = 'none';
}

function validacionOK(){
    if ( contador == 0){
        swal("Message Sent!", "Thanks for completing the form. We'll be in touch soon!");
    }
}
