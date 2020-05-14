/// Primero apred




const inter = rxjs.interval(100);

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
  inter.subscribe(i => {
    console.log('i', i)
  })
  console.log('gola')
  cuenta++
  refreshCounter()
}