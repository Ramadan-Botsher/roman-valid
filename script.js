
const Input = document.getElementById('number');
const Result = document.getElementById('output');
const Btn = document.getElementById('convert-btn');

Btn.addEventListener('click', () => {
  let number = Input.value.trim();

  if (number < 0) {
    Result.innerText = "Please enter a number greater than or equal to 1";
  } else if (number > 3999) {
    Result.innerText = "Please enter a number less than or equal to 3999";
  } else if (!isNaN(number) && number >= 1 && number <= 3999) {
    let roman = '';
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    for (let i = 0; i < values.length; i++) {
      while (number >= values[i]) {
        roman += symbols[i];
        number -= values[i];
      }
    }

    Result.innerText = `${roman}`;
  } else {
    Result.innerText = 'Please enter a valid number';
  }
});
