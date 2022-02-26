let count = 0;
let number = document.querySelector('h4');

let incCounter = () => {
  count++;
  number.innerHTML = count;
};
let decCounter = () => {
  count--;
  number.innerHTML = count;
};
