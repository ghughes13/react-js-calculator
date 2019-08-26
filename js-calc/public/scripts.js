let renderArea = document.querySelector('.render-calculation');
let elements = document.querySelectorAll('.calculator div p');
elements = Array.from(elements);
elements.shift();
let calculationHolder = [];
let finalCalc = 0;
let operator = ''

renderArea.innerText = finalCalc;

elements.forEach((element) => {
  element.addEventListener('click', (el) => {
    if(event.target.parentElement.classList.contains('num')) {
      calculationHolder.push(event.target.innerText);
      renderArea.innerText = calculationHolder.join('')
    } else if(event.target.parentElement.classList.contains('operator')){
      finalCalc = parseInt(calculationHolder.join(''));
      calculationHolder = [];
      operator = event.target.innerText;
    } else if(event.target.parentElement.classList.contains('equal')) {
      console.log(finalCalc);
      console.log(operator);
      console.log(calculationHolder.join(''));
      renderArea.innerText = eval(finalCalc + operator + calculationHolder.join(''));
    } else if(event.target.parentElement.classList.contains('clear')) {
      calculationHolder = [];
      finalCalc = 0;
      operator = '';
      renderArea.innerText = 0;
    } else if(event.target.parentElement.classList.contains('back')) {
      calculationHolder.pop();
      renderArea.innerText = calculationHolder.join('')
    }
  })
})

const refreshDisplayArea = () => {
renderArea.innerText = calculationHolder.join('')
}
