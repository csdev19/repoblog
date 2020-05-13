
// rxjs.of(1, 2, 3);
console.log('hey')

let cuenta = 0;

const containerElement = document.getElementById('container');
const contadorElement = document.getElementById('contador');
console.log("container", container)


const palabra = document.createElement('div')


function refreshCounter() {
  contadorElement.innerHTML = cuenta;
}


palabra.innerText = 'holaaaaaaaa'

containerElement.appendChild(palabra)


function hola(){
  console.log('gola')
  cuenta++
  refreshCounter()
}