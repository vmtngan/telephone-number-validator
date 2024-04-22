'use strict';

const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

const isValidNumber = (input) => {
  if (!input) {
    alert('Please provide a phone number');
    return false;
  }

  const countryCode = '^(1\\s?)?';
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const spacesDashes = '[\\s\\-]?';
  const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
  const phoneRegex = new RegExp(
    `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
  );

  return phoneRegex.test(input);
};

const renderResults = (input) => {
  let color = '#4d3800';
  let textValid = 'Invalid';

  if (isValidNumber(input)) {
    color = '#00471b';
    textValid = 'Valid';
  }

  const result = `
    <p class="results-text" style="color: ${color}">${textValid} US number: ${input}
    </p>`;

  resultsDiv.insertAdjacentHTML('beforeend', result);

  userInput.value = '';
};

checkBtn.addEventListener('click', () => {
  renderResults(userInput.value);
});

userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    renderResults(userInput.value);
  }
});

clearBtn.addEventListener('click', () => {
  resultsDiv.textContent = '';
});
