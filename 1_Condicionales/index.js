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

var calificacion = prompt('Dame una calificacion entre del 1 al 10')

if(calificacion > 10 || calificacion <= 0){
    document.write('Error')
}else if(calificacion < 6){
    document.write('Reprobado')
}else if(calificacion <= 8 && calificacion >= 6){
    document.write('Regular')
}else if(calificacion == 9){
    document.write('Bien')
}else if(calificacion == 10){
    document.write('Excelente')
}

document.write('<br>')

var helado = prompt('Bienvenido a Dolphy. Gracias por su compra de un helado. Por favor, elija un topping: Oreo, KitKat, Brownie o sin topping')

if(helado.toLocaleLowerCase() == 'sin topping'){
    document.write('El helado sin topping tiene un precio de $50 mxn')
}else if(helado.toLocaleLowerCase() == 'oreo'){
    document.write('El helado con topping de oreo tiene un precio de $60 mxn')
}else if(helado.toLocaleLowerCase() == 'kitkat'){
    document.write('El helado con KitKat de topping tiene un precio de $65 mxn')
}else if(helado.toLocaleLowerCase() == 'brownie'){
    document.write('El helado con topping de brownie tiene un precio de $70 mxn')
}else{
    document.write('No tenemos ese topping. El helado sin topping tiene un precio de $50 mxn')
}

document.write('<br>')

var curso = prompt('Bienvenid@ a nuestra solicitud de inscripcion para desarrollo de apps. En que nivel esta interesad@? Tenemos Course, Carrera y Master')

if(curso.toLocaleLowerCase() == 'course'){
    document.write('Haz elegido ', curso, '. Tiene un costo de base mensual de $4999 mxn.')
    var beca = prompt('Cuentas con beca de Facebook, Google o Jesua? Si no es asi, pon ninguna')
    if(beca.toLocaleLowerCase() == 'facebook'){
        descuento = 4999 * .8
        total = descuento * 2
        document.write('Tu precio total es de $', total , ' gracias a tu beca y durara 2 meses')
    }else if(beca.toLocaleLowerCase() == 'google'){
        descuento = 4999 * .85
        total = descuento * 2
        document.write('Tu precio total es de $', total , ' gracias a tu beca y durara 2 meses')
    }else if(beca.toLocaleLowerCase() == 'jesua'){
        descuento = 4999 * .5
        total = descuento * 2
        document.write('Tu precio total es de $', total , ' gracias a tu beca y durara 2 meses')
    }else if(beca.toLocaleLowerCase() == 'ninguna'){
        descuento = 4999
        total = descuento * 2
        document.write('Tu precio total es de $', total, ' y durara 2 meses')
    }
}else if(curso.toLocaleLowerCase() == 'carrera'){
    document.write('Haz elegido ', curso, '. Tiene un costo de base mensual de $3999 mxn.')
    var beca = prompt('Cuentas con beca de Facebook, Google o Jesua? Si no es asi, pon ninguna')
    if(beca.toLocaleLowerCase() == 'facebook'){
        descuento = 3999 * .8
        total = descuento * 6
        document.write('Tu precio total es de $', total , ' gracias a tu beca y durara 6 meses')
    }else if(beca.toLocaleLowerCase() == 'google'){
        descuento = 3999 * .85
        total = descuento * 6
        document.write('Tu precio total es de $', total , ' gracias a tu beca y durara 6 meses')
    }else if(beca.toLocaleLowerCase() == 'jesua'){
        descuento = 3999 * .5
        total = descuento * 6
        document.write('Tu precio total es de $', total , ' gracias a tu beca y durara 6 meses')
    }else if(beca.toLocaleLowerCase() == 'ninguna'){
        descuento = 3999
        total = descuento * 6
        document.write('Tu precio total es de $', total, ' y durara 6 meses')
    }
}else if(curso.toLocaleLowerCase() == 'master'){
    document.write('Haz elegido ', curso, '. Tiene un costo de base mensual de $2999 mxn.')
    var beca = prompt('Cuentas con beca de Facebook, Google o Jesua? Si no es asi, pon ninguna')
    if(beca.toLocaleLowerCase() == 'facebook'){
        descuento = 2999 * .8
        total = descuento * 12
        document.write('Tu precio total es de $', total , ' gracias a tu beca y durara 12 meses')
    }else if(beca.toLocaleLowerCase() == 'google'){
        descuento = 2999 * .85
        total = descuento * 12
        document.write('Tu precio total es de $', total , ' gracias a tu beca y durara 12 meses')
    }else if(beca.toLocaleLowerCase() == 'jesua'){
        descuento = 2999 * .5
        total = descuento * 12
        document.write('Tu precio total es de $', total , ' gracias a tu beca y durara 12 meses')
    }else if(beca.toLocaleLowerCase() == 'ninguna'){
        descuento = 2999
        total = descuento * 12
        document.write('Tu precio total es de $', total, ' y durara 12 meses')
    }
}

document.write('<br>')

var vehiculo = prompt('Viajas en coche, moto o autobus?')

if(vehiculo.toLocaleLowerCase() == 'coche'){
    var dist = prompt('Cuantos kilometros vas a viajar?')
    if(dist <= 100 && dist > 0){
        extra = 5
        resultado = (dist * .2) + extra
        document.write('Necesitaras ', resultado, ' para tu viaje')
    }else if (dist > 100){
        extra = 10
        resultado = (dist * .2) + extra
        document.write('Necesitaras ', resultado, ' para tu viaje')
    }
}else if(vehiculo == 'moto'){
    var dist = prompt('Cuantos kilometros vas a viajar?')
    if(dist <= 100 && dist > 0){
        extra = 5
        resultado = (dist * .1) + extra
        document.write('Necesitaras ', resultado, ' para tu viaje')
    }else if (dist > 100){
        extra = 10
        resultado = (dist * .1) + extra
        document.write('Necesitaras ', resultado, ' para tu viaje')
    }
} else if(vehiculo == 'autobus'){
    var dist = prompt('Cuantos kilometros vas a viajar?')
    if(dist <= 100 && dist > 0){
        extra = 5
        resultado = (dist * .5) + extra
        document.write('Necesitaras ', resultado, ' para tu viaje')
    }else if (dist > 100){
        extra = 10
        resultado = (dist * .5) + extra
        document.write('Necesitaras ', resultado, ' para tu viaje')
    }
}