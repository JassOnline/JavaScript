var belleza = prompt('Eres bellisim@? ')

if(belleza.toLocaleLowerCase() == 'si'){
    document.write('Ciertamente')
}else{
    document.write('No te creo')
}

document.write('<br>')

var divisible = prompt('Dame un numero y te dire si es divisible entre 2')

if(divisible % 2 == 0){
    document.write(divisible, ' es divisible entre 2!')
}else{
    document.write(divisible, ' no es divisible entre 2...')
}

document.write('<br>')

var par = prompt('Dame un número, te dire si es par o no')

if(par % 2 == 0){
    alert(divisible, ' es un número par!')
}else{
    alert(divisible, ' no es un número par...')
}

var cliente = prompt('Ingresa tu numero de cliente')

if(cliente == 1000){
    document.write('Ganaste un premio!')
}else{
    document.write('Lo sentimos cliente numero ', cliente, ' . Sigue participando')
}

document.write('<br>')

var primerNum = prompt('Dame 2 números, te dire cual es el menor. Primero un número:')
var segundoNum = prompt('Ahora el segundo número:')

if(primerNum < segundoNum){
    document.write('El primer número, ', primerNum, ', es menor')
}else if((primerNum > segundoNum)){
    document.write('El segundo número, ', segundoNum, ', es menor')
}

document.write('<br>')

var primerNum = prompt('Dame 3 números, te dire cual es el menor. Primero un número:')
var segundoNum = prompt('Ahora el segundo número:')
var tercerNum = prompt('Y el tercer número:')

if(primerNum > segundoNum && primerNum > tercerNum){
    document.write('El primer numero, ', primerNum, ', es mayor')
}else if((segundoNum > primerNum && segundoNum > tercerNum)){
    document.write('El segundo numero, ', segundoNum, ', es mayor')
}else if((tercerNum > primerNum && tercerNum > segundoNum)){
    document.write('El segundo numero, ', tercerNum, ', es mayor')
}else if(primerNum == segundoNum || primerNum == tercerNum){
    document.write('Me diste 2 numeros iguales!')
}else if(segundoNum == primerNum || segundoNum == tercerNum){
    document.write('Me diste 2 numeros iguales!')
}

document.write('<br>')

var dia = prompt('Dime un dia de la semana')

if(dia.toLocaleLowerCase() == 'lunes'){
    document.write('Garfield odia los lunes...')
}else if(dia.toLocaleLowerCase() == 'viernes'){
    document.write('Gracias a dios que es Viernes!')
}else if(dia.toLocaleLowerCase() == 'sabado' || dia.toLocaleLowerCase() == 'domingo'){
    document.write('Agusto ;3')
}else{
    document.write('Gracias por el dato!')
}

document.write('<br>')