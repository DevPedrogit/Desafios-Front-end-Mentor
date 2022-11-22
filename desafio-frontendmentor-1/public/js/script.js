let btn = document.querySelector('.btn');
let container = document.querySelector('.container');
let containerThank = document.querySelector('.container-thank-you-state');

function thankYouState () {
    container.style.display = 'none';
    containerThank.style.display = 'flex';
}
btn.addEventListener('click', thankYouState);


let ballsSelect = document.querySelectorAll('.balls div');
let span = document.querySelector('.selected span');

for (let i = 0; i < ballsSelect.length; i++) {
  ballsSelect[i].addEventListener('click', (t) => {
    let opt = t.target.getAttribute('opt');
    ballsSelect[i].style.background = '#959eac';
    ballsSelect[i].style.color = '#ffff';
    span.innerHTML = opt;
  });
  
}
