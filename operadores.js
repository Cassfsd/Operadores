function test(numero1, numero2) {//lo meto dentro de una función para poder llamarlo después 
    var resultado
    if (numero1 > numero2) {
        resultado = (numero1 + " es mayor que " + numero2)
    }
    else if (numero1 < numero2) {
        resultado = (numero1 + " es menor que " + numero2)
    }
    else {
        resultado = numero1 + " y " + numero2 + " son iguales "
    } return resultado
}

function permiso(edad1, edad2) {//lo meto dentro de una función para poder llamarlo después 
    var resultado
    if (edad1 > 18 && edad2 > 18) {
        resultado = (" ninguno necesita permiso ")
    }
    else if (edad1 > 18 || edad2 > 18) {
        resultado = (" Uno de los 2 necesita permiso") //Acá es porque cuando evalúa es uno o el otro. Si yo pongo uno solo que sea menor, la primera condición no se cumple, pero tampoco el default(siendo los dos menores), porque uno de los dos (||) es mayor. Bien sea edad1 O edad2. 
    }
    else {
        resultado = " ambos necesitan permiso "
    } return resultado
}
//En términos del scope, si yo por ejemplo haog un console log de resultado, me va a decir que no está definido porque resultado vive dentro de la función.

var count=0
function incremento (){
    return count++ //Así me va a sumar en unidad, si quiero asignarle un valor a ese incremento count +=5/10/7 lo que quiera. 

   // Y si quiero pasarle un número específico, le paso count += numero, representando ese "número" un parámetro que lo voy a pasar a incremento. 
}
//Si yo declaro la var count dentro de la función, cada vez que llame a esa función va a ser cero, porque se reinicia. Si la declaro en el ambito global, la almacena allí y le aumenta 1 cada vez que pasa por ahí. 

var nombreValor 
function comparacionDos(){
    var resultado
if(!nombreValor){
    resultado = " No tiene valor asignado, sea false, null o undefined "
    //Con el ! verifica que nombreValor no tenga valor asignado y como en este caso no lo tiene, es true y toma el condicional del if.
}else{resultado= " Tiene valor asignado, es diferente a false, null o undefined"}
return resultado
}

//Que una variable sea undefined o null, en cualquier condicional arroja false. 