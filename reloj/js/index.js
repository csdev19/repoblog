
const els = {
  s: initElements('s'),
  m: initElements('m'),
  h: initElements('h')
}

function initElements(type) {
  const els = [{}, {}];

  if( !['s','m','h'].includes(type) ) return els;

  const target = document.querySelector(`.flip-clock-${type}`);

  if(!target) return els;

  let el;

  el = els[0];
  el.digit = target.querySelector('.digit-left');
  el.card = el.digit.querySelector('.card');
  el.cardFaces = el.card.querySelectorAll('.card-face');
  el.cardFaceA = el.cardFaces[0];
  el.cardFaceB = el.cardFaces[1];


  el = els[1];
  el.digit = target.querySelector('.digit-right');
  el.card = el.digit.querySelector('.card');
  el.cardFaces = el.card.querySelectorAll('.card-face');
  el.cardFaceA = el.cardFaces[0];
  el.cardFaceB = el.cardFaces[1];

  return els;
};

function runClock(now, type_counter) {

  for(const t of Object.keys(els)) {
    for(const i of ['0', '1']) {
      const curr = now[`${t}${i}`];
      let next = (type_counter === 'plus') ? +curr + 1 : +curr - 1;

      next = next < 0 ? `9` : `${next}`;

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
        if (!el.digit.dataset.digitBefore) {
          console.log('1')
          el.digit.dataset.digitBefore = curr;
          el.cardFaceA.textContent = el.digit.dataset.digitBefore;

          el.digit.dataset.digitAfter = next;
          el.cardFaceB.textContent = el.digit.dataset.digitAfter;


        } else if (el.digit.dataset.digitBefore !== curr){
          console.log('2  ')

          el.card.addEventListener('transitionend', function () {
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
            // console.log('algun filp?')
            el.card.classList.add('flipped');
          }
        }
      }
    }
  }
}


const inter = rxjs.interval(1000);
const date = new Date();


inter.subscribe(d => {

  let copiaDate = new Date(date.getTime());

  copiaDate.setSeconds(copiaDate.getSeconds() - d);



  const now = {
    h: copiaDate.getHours(),
    m: copiaDate.getMinutes(),
    s: copiaDate.getSeconds(),
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

  runClock(now, 'minus');
})



/*


/// Primero apred





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