const aqua = 200, emocion = 180, alegria = 160, frescura = 150;

var Juana = {
    productosVendidos: 0,
    gananciaGenerada: 0
}
var Pedro = {
    productosVendidos: 0,
    gananciaGenerada: 0
}

var aquaVendida = 0, emocionVendida = 0, alegriaVendida = 0, frescuraVendida = 0;

//Dos funciones del boton que cambian entre si al darle click

function primera(){
    n++
    console.log('Imprimido ;v   ' + n)
    document.getElementById('izq_arriba').onclick=segunda;
    // document.getElementById('izq_arriba').addEventListener('click', segunda)
    // document.getElementById('izq_arriba').setAttribute('onclick', 'function segunda()')
}

function segunda(){
    n++
    console.log('Imprimido pero diferente v;  ' + n)
    document.getElementById('izq_arriba').onclick=primera;
    // document.getElementById('izq_arriba').addEventListener('click', primera)
    // document.getElementById('izq_arriba').setAttribute('onclick', 'function primera()')
}

function ventaAqua(){
    aquaVendida = prompt('¿Cuantos se vendieron?')
    gananciaVenta = aquaVendida * 200
    console.log('$' + gananciaVenta)
    document.getElementById('der_1').disabled = true
    document.getElementById('der_2').disabled = true
    document.getElementById('der_3').disabled = true
    document.getElementById('der_4').disabled = true
    asignarVentas()
}

function ventaEmocion(){
    emocionVendida = prompt('¿Cuantos se vendieron?')
    gananciaVenta = emocionVendida * 180
    console.log('$' + gananciaVenta)
    document.getElementById('der_1').disabled = true
    document.getElementById('der_2').disabled = true
    document.getElementById('der_3').disabled = true
    document.getElementById('der_4').disabled = true
    asignarVentas()
}

function ventaAlegria(){
    alegriaVendida = prompt('¿Cuantos se vendieron?')
    gananciaVenta = alegriaVendida * 160
    console.log('$' + gananciaVenta)
    document.getElementById('der_1').disabled = true
    document.getElementById('der_2').disabled = true
    document.getElementById('der_3').disabled = true
    document.getElementById('der_4').disabled = true
    asignarVentas()
}

function ventaFrescura(){
    frescuraVendida = prompt('¿Cuantos se vendieron?')
    gananciaVenta = frescuraVendida * 150
    console.log('$' + gananciaVenta)
    document.getElementById('der_1').disabled = true
    document.getElementById('der_2').disabled = true
    document.getElementById('der_3').disabled = true
    document.getElementById('der_4').disabled = true
    asignarVentas()
}

function asignarVentas(){
    document.getElementById('pantalla').innerText = '¿Quien hizo la venta?'
    document.getElementById('izq_arriba').innerText = 'Juana'
    document.getElementById('izq_arriba').disabled = false
    document.getElementById('izq_abajo').innerText = 'Pedro'
    document.getElementById('izq_abajo').disabled = false
    document.getElementById('izq_arriba').onclick = function () {asignarVendedor(Juana)}
    document.getElementById('izq_abajo').onclick = function () {asignarVendedor(Pedro)}
}

function asignarVendedor(vendedor){
    vendedor.productosVendidos += aquaVendida * 1
    vendedor.productosVendidos += emocionVendida * 1
    vendedor.productosVendidos += alegriaVendida * 1
    vendedor.productosVendidos += frescuraVendida * 1
    vendedor.gananciaGenerada += gananciaVenta
    console.log(izq_arriba.innerText + ' ha vendido ' + Juana.productosVendidos + ' productos y ha generado $' + Juana.gananciaGenerada)
    console.log(izq_abajo.innerText + ' ha vendido ' + Pedro.productosVendidos + ' productos y ha generado $' + Pedro.gananciaGenerada)
    reiniciar()
}

function reiniciar(){
    document.getElementById('pantalla').innerText = 'Inserte su operación a relizar'
    document.getElementById('izq_arriba').disabled = true
    document.getElementById('izq_abajo').disabled = true
    document.getElementById('der_1').disabled = false
    document.getElementById('der_2').disabled = false
    document.getElementById('der_3').disabled = false
    document.getElementById('der_4').disabled = false
    aquaVendida = 0
    emocionVendida = 0
    alegriaVendida = 0
    frescuraVendida = 0
}

function finDeMes(){
    console.log(izq_arriba.innerText + ' ha vendido ' + Juana.productosVendidos + ' productos y ha generado $' + Juana.gananciaGenerada)
    console.log(izq_abajo.innerText + ' ha vendido ' + Pedro.productosVendidos + ' productos y ha generado $' + Pedro.gananciaGenerada)
    if(Juana.gananciaGenerada > Pedro.gananciaGenerada){
        console.log('Juana es la empleada del mes con $' + Juana.gananciaGenerada + ' generados de ganancia!')
    }else if(Pedro.gananciaGenerada > Juana.gananciaGenerada){
        console.log('Pedro es el empleado del mes con $' + Pedro.gananciaGenerada + ' generados de ganancia!')
    }else if (Pedro.gananciaGenerada == Juana.gananciaGenerada){
        console.log('Ha habido un empate en ganancias')
    }
    document.getElementById('izq_arriba').disabled = true
    document.getElementById('izq_abajo').disabled = true
    document.getElementById('centro').disabled = true
    document.getElementById('der_1').disabled = true
    document.getElementById('der_2').disabled = true
    document.getElementById('der_3').disabled = true
    document.getElementById('der_4').disabled = true
}