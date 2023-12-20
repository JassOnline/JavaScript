const screen = document.querySelector(".atm-system__screen");
const inputCard = document.querySelector(".atm-system__card");

//const key = document.querySelectorAll(".atm-system__keys")
//key[0].addEventListener("click", (event) => console.log(event.target.id));
//key[4].addEventListener("click", (event) => console.log(event.target.id));

var usuario
var cuentas = [
    { nombre: 'Mali', saldo: 200, password: 2000 },
    { nombre: 'Sergio', saldo: 290, password: 1234 },
    { nombre: 'Rogue', saldo: 67, password: 8008 }
  ];

const keys = document.querySelector(".atm-system__input-keys")
let pin =[];
let state = ""
let monto = []

const validateMonto = () => {
    keys.addEventListener("click", (event)=> {
        if(event.target.id) { 
            // Si tiene id va a entrar
            // Recogemos el valor del id y hacemos push al array pin
            monto.push(event.target.id);
            //Ejecutamos la funcion para validar el pin
            validateMonto(monto);
            console.log(monto)
        }
    });

    if(monto_keys + saldo > 990)

    screen.innerText = 'Limite superado. Ingresa un monto menor.'
    saldo = []
}

const validatePin = (pin_keys) => {
    if(pin_keys.length === 4){ //Validamos la longitud
        if(pin_keys.toLocaleString().replaceAll(",","") === "1234"){
            //Convertimos el array a string y reemplazamos las ',' y validamos que el resultado sea igual a '####' 
            screen.innerText = "PIN correcto. Bienvenido, Sergio";
            usuario = 1
            setTimeout(()=> {
                operacionRealizar()
            }, 2500)
            
        }else if(pin_keys.toLocaleString().replaceAll(",","") ==="2000"){
            screen.innerText = "PIN correcto. Bienvenida, Mali";
            usuario = 0
            setTimeout(()=> {
                operacionRealizar()
            }, 2500)
        }else if(pin_keys.toLocaleString().replaceAll(",","") ==="8008"){
            screen.innerText = "PIN correcto. Bienvenida, Rogue";
            usuario = 2
            setTimeout(()=> {
                operacionRealizar()
            }, 2500)
        }else{
            screen.innerText = "PIN incorrecto. Vuelva a intentar";
            pin = []
        }
    }
};

function operacionRealizar(){
    screen.innerText = '¿Que operacion desea realizar?'
    document.getElementById('consultar_saldo').disabled = false
    document.getElementById('consultar_saldo').innerText = 'Consultar saldo'
    document.getElementById('consultar_saldo').onClick = consultarSaldo
    document.getElementById('ingresar_monto').disabled = false
    document.getElementById('ingresar_monto').innerText = 'Hacer un Deposito'
    document.getElementById('retirar_monto').disabled = false
    document.getElementById('retirar_monto').innerText = 'Hacer un Retiro'
    document.getElementById('0').disabled = true
    document.getElementById('1').disabled = true
    document.getElementById('2').disabled = true
    document.getElementById('3').disabled = true
    document.getElementById('4').disabled = true
    document.getElementById('5').disabled = true
    document.getElementById('6').disabled = true
    document.getElementById('7').disabled = true
    document.getElementById('8').disabled = true
    document.getElementById('9').disabled = true
    document.getElementById('btn-delete').disabled = true
    document.getElementById('btn-success').disabled = true
}

// function consultarSaldo(){
//     console.log('Saldo: ' + cuentas[usuario].saldo)
// }

function consultarSaldo(){
    screen.innerText = 'Saldo: ' + cuentas[usuario].saldo
    document.getElementById('consultar_saldo').disabled = true
    document.getElementById('consultar_saldo').innerText = ''
    document.getElementById('ingresar_monto').disabled = true
    document.getElementById('ingresar_monto').innerText = ''
    document.getElementById('retirar_monto').disabled = true
    document.getElementById('retirar_monto').innerText = ''
}

function retiro(){
    screen.innerText = 'Ingrese el monto a retirar. Presiona el boton verde para confirmar'
    document.getElementById('consultar_saldo').disabled = true
    document.getElementById('consultar_saldo').innerText = ''
    document.getElementById('ingresar_monto').disabled = true
    document.getElementById('ingresar_monto').innerText = ''
    document.getElementById('retirar_monto').disabled = true
    document.getElementById('retirar_monto').innerText = ''
    document.getElementById('0').disabled = false
    document.getElementById('1').disabled = false
    document.getElementById('2').disabled = false
    document.getElementById('3').disabled = false
    document.getElementById('4').disabled = false
    document.getElementById('5').disabled = false
    document.getElementById('6').disabled = false
    document.getElementById('7').disabled = false
    document.getElementById('8').disabled = false
    document.getElementById('9').disabled = false
    document.getElementById('btn-delete').disabled = false
    document.getElementById('btn-success').disabled = false
}

function deposito(){
    validateMonto
    screen.innerText = 'Ingrese el monto a depositar. Presiona el boton verde para confirmar'
    document.getElementById('consultar_saldo').disabled = true
    document.getElementById('consultar_saldo').innerText = ''
    document.getElementById('ingresar_monto').disabled = true
    document.getElementById('ingresar_monto').innerText = ''
    document.getElementById('retirar_monto').disabled = true
    document.getElementById('retirar_monto').innerText = ''
    document.getElementById('0').disabled = false
    document.getElementById('1').disabled = false
    document.getElementById('2').disabled = false
    document.getElementById('3').disabled = false
    document.getElementById('4').disabled = false
    document.getElementById('5').disabled = false
    document.getElementById('6').disabled = false
    document.getElementById('7').disabled = false
    document.getElementById('8').disabled = false
    document.getElementById('9').disabled = false
    document.getElementById('btn-delete').disabled = false
    document.getElementById('btn-success').disabled = false
}

keys.addEventListener("click", (event)=> {
    if(event.target.id) { 
        // Si tiene id va a entrar
        // Recogemos el valor del id y hacemos push al array pin
        pin.push(event.target.id);
        //Ejecutamos la funcion para validar el pin
        validatePin(pin);
    } else {
        console.log("Tecla sin funcion");
    }
    console.log(pin);
});

inputCard.addEventListener("click", function () {
    screen.innerText = "Validando tarjeta...";
    setTimeout(()=> {
        screen.innerText = "Inserte su PIN";
        state = "login";
    }, 2500)
});

window.addEventListener("load", ()=> {
    screen.innerText = "Bienvenido al ATM";
})

// PascalCase -> para clases
// camelCase -> para variables
// snake_case -> keys en un objeto


//let index = 0
//while (index <= 100) {
  //if(index == 50){
    //console.log('felicidades eres el ganador');
  //}
  //else{
    //console.log(index);
  //}
  //index++
//}
//console.log('me ejecuto de ultimo');

//for (let index = 1; index < 100; index++){
    //if (index % 3 === 0 && index & 5 === 0){
        //console.log(index, "Fizzbuzz");
    //}
    //else if(index % 3 === 0){
        //console-log(index, "Fizz");
    //}
    //else if(index % 5 === 0){
        //console-log(index, "Buzz");
    //}else{
    //console.log(index);
    //}
//}

function saludar(nombre, apellido, pais){
    console.log("Hola ", nombre, apellido, " de ", pais);
}

saludar("Andres", "Jasso", "Mexico")