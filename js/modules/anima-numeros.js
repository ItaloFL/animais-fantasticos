export default function initAnimaNumeros() {
}

function animaNumero() {
  const numeros = document.querySelectorAll('[data-numero]');

  numeros.forEach((numero) => {
    const total = +numero.innerText;
    const incremento = Math.floor(total/100);

    let start = 0;
    
    const timer = setInterval(() => {
      start = start + incremento;
      numero.innerText = start;
      start++
      if(start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random())
  })

}

function handleMutation(mutation) {
  if(mutation[0].target.classList.contains('ativo')) {
    observar.disconnect();
    animaNumero();
  }
}

const observeTarget = document.querySelector('.numeros')
const observar = new MutationObserver(handleMutation);

observar.observe(observeTarget, {
  attributes: true
})