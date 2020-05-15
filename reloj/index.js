

(function () {
  'use strict';

  const els = {
    s: initElements('s'),
    m: initElements('m'),
    h: initElements('h'),
  }
  console.log('els', els)
  function initElements(type) {
    const els = [{}, {}];

    if( !['s','m','h'].includes(type) ) return els;

    const target = document.querySelector(`.clock-${type}`);

    if(!target) return els;
    
    let el;

    el = els[0];
    el.digit = target.querySelector('.digit-left');
    el.card = target.querySelector('.card');
    el.cardFaces = el.card.querySelectorAll('.card-face');
    el.cardFaceA = el.cardFaces[0];
    el.cardFaceB = el.cardFaces[1];
    
    
    el = els[1];
    el.digit = target.querySelector('.digit-rigth');
    el.card = target.querySelector('.card');
    el.cardFaces = el.card.querySelectorAll('.card-face');
    el.cardFaceA = el.cardFaces[0];
    el.cardFaceB = el.cardFaces[1];

    return els;
  }

  (function runClock() {
    const date = new Date();
    const now = {
      h: date.getHours(),
      m: date.getMinutes(),
      s: date.getSeconds(),
    }

    now.h = now.h < 10 ? `0${now.h}` : `${now.h}`;
    now.m = now.m < 10 ? `0${now.m}` : `${now.m}`;
    now.s = now.s < 10 ? `0${now.s}` : `${now.s}`;

    now.h0 = now.h[0];
    now.h1 = now.h[1];
    now.m0 = now.m[0];
    now.m1 = now.m[1];
    now.s0 = now.s[0];
    now.s1 = now.s[1];

    console.log(now)

    for(const t of Object.keys(els)) {
      for(const i of ['0', '1']) {
        const curr = now[`${t}${i}`];
        let next = +curr + 1;
        console.log("runClock -> curr", curr)

        if (t === 'h') {
          if (i === '0') next = (next < 3) ? `${next}` : '0';
          if (i === '1') next = (next < 4) ? `${next}` : '0';
        }

        if (t === 'm') {
          if (i === '0') next = (next < 6) ? `${next}` : '0';
          if (i === '1') next = (next < 10) ? `${next}` : '0';
        }

        if (t === 's') {
          if (i === '0') next = (next < 6) ? `${next}` : '0';
          if (i === '1') next = (next < 10) ? `${next}` : '0';
        }

        const el = els[t][i];

        if (el && el.digit) {
          console.log("runClock -> el.digit", el.digit)
          console.log("runClock -> el.digit", el.digit.dataset)
          if (!el.digit.dataset.digitBefore) {
            el.digit.dataset.digitBefore = curr;
            el.cardFaceA.textContent = el.digit.dataset.digitBefore;

            el.digit.dataset.digitAfter = next;
            el.cardFaceB.textContent = el.digit.dataset.digitAfter;
          } else if (el.digit.dataset.digitBefore !== curr){
            el.card.addEventListener('transitioned', () => {
              el.digit.dataset.digitBefore = curr;
              el.cardFaceA.textContent = el.digit.dataset.digitBefore;

              const cardClone = el.card.cloneNode(true);
              cardClone.classList.remove('flipped');
              el.digit.replaceChild(cardClone, el.card);
              el.card = cardClone;

              el.cardFaces = el.card.querySelectorAll('.card-face');
              el.cardFaceA = el.cardFaces[0];
              el.cardFaceB = el.cardFaces[1];


              el.digit.dataset.digitAfter = next;
              el.cardFaceB.textContent = el.digit.dataset.digitAfter;
            }, { once : true });
            if ( !el.card.classList.contains('flipped') ) {
              el.card.classList.add('flipped');
            } else {
              el.card.classList.remove('flipped');
            }
          }
        }
      }
    }

    setTimeout(runClock, 1000);
  })()
})()




/*


/// Primero apred




const inter = rxjs.interval(100);

console.log('hey')

let cuenta = 0;

const containerElement = document.getElementById('container');
const contadorElement  = document.getElementById('contador');
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
} */