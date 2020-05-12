# Bueno, hablemos de var  en javascript con unos ejemplitos para ser breves


## Teoria 

En javascript por hoisting la variables se predeclaran con valor undefined hasta que son llenadas o en caso de que no lo hagamos seguira como undefined pero si reservada su instancia en la memoria.

Algo interesante de las funciones es su ejecucion y su ciclo de vida que destruye todo luego de su return


1. Veamos si inicializando una variable dentro de una funcion instancia su memoria

```js
function inicializarVar() {
  var inicial = 0;
}

inicializarVar();
console.log(inicial) // Se caera 
// Asi que cuando lo inicializamos importa

```

2. A ver si dentro de una funcion podemos tomar variables de por fuera con el mismo nombre

```js

// Hacemos una inicializacion aqui
var hola = '9'
function saludar() {
  // Pero aqui no existe
  console.log('hola', hola)
  // Aqui tampoco
  hola++;
  console.log('hola2', hola)
  // Aqui reinicializamos la variable cambia la que creamos afuera ?
  var hola = 2;
  console.log('hola3', hola)
  // Aqui cambia la variable que reinicializamos
  hola--;
  console.log('hola4', hola)
}
```


3. Que onda con las variables que dicen aveces undefined y aveces se caen

```js
var a = 2

function saludar() {
  console.log('b', b) // Que diga que es undefined esta bien
  // Ya separo su espacio en memoria
  console.log('c' , chau) // Chau se caera, porque ? porque no lo declaramos asi que no tiene una referencia 
  // a esta variable

  b = b + 2;
  console.log('b', b)
  
  var b = '2323'
  console.log('b', b)
}

```


4. veamos el llamar a variables que nunca defino denttro de una funcion


```js

var ejecutado = 'yep';

function ejecutar() {
  console.log('ejecutado', ejecutado) // si funciona 

  console.log(hola)
  var hola = 'holaaaaaa';
  console.log(hola)

  // var ejecutado = 'holi' // si agrego esta linea sale undefined porque ya reservo espacio de memoria
  // Para esta scope
}

```

5. sacado de la pagina de mozilla

```js

function ejecutar() {
  console.log('hola 1', hola) // undefined
  hola = 'holaaaaaa';
  console.log('hola 2', hola) // holaaaa
  var hola;
  console.log('hola 1', hola) // holaaa
}

// si ejecturas esto
ejecutar() 

// nos daremos cuenta que el segundo console funciona aunque la variable no estaba declarada y eso es por el
// HOISTING

```