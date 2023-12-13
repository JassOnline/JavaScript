const aqua = 200, emocion = 180, alegria = 160, frescura = 150;

const Juana = {
    productosVendidos: 0,
    gananciaGenerada: 0
}
const Pedro = {
    productosVendidos: 0,
    gananciaGenerada: 0
}

var n = 0

function primera(){
    n++
    console.log('Imprimido ;v   ' + n)
    document.getElementById('izq_arriba').addEventListener('click', segunda)
    // document.getElementById('izq_arriba').setAttribute('onclick', 'function segunda()')
}

function segunda(){
    console.log('Imprimido pero diferente v;')
    document.getElementById('izq_arriba').addEventListener('click', primera)
    // document.getElementById('izq_arriba').setAttribute('onclick', 'function primera()')
}