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

  // setTimeout(runClock, 1000);
}

export default runClock;