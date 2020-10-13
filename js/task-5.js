const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const currentValueOutput = event => {
  output.textContent =
    input.value === '' ? 'незнакомец' : event.currentTarget.value;
};

input.addEventListener('input', currentValueOutput);
