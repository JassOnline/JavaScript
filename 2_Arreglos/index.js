//1. Crear un array de 10 numeros enteros al azar y verlos en consola
var array = []

for (var i = 0; i < 11; i++){
    array.push(' ' + (Math.random()*100).toFixed(0))
}

document.write(array)

//2. Usuario pone datos separados por coma y luego son mostrados en consola en un array
var inputUsuario = prompt('Escribe varias palabras separadas por comas:')
var arreglado = inputUsuario.split(',');

console.log(arreglado)

//3. El array [10,40,30,20,15,5] es ordenado de menor a mayor, mostrando el menor y el mayor
var sinOrden = [10,40,30,20,15,5]

varOrden = sinOrden.sort(function (a, b){
    return a - b
})

console.log('Numero menor: ' + varOrden[0])
console.log('Numero mayor: ' + varOrden[5])