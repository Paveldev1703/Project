// script.js

// Kalender beholder
const calendarGrid = document.getElementById('calendar-grid');
const messageBox = document.getElementById('message-box');
const messageText = document.getElementById('message');
const closeMessageButton = document.getElementById('close-message');
const resetButton = document.getElementById('reset-button');

// API for å få julevitser
const jokeAPI = 'https://v2.jokeapi.dev/joke/Christmas?type=single';

// Åpne datolager
const openedDates = new Set();

// Opprette et kalenderrutenett
for (let i = 1; i <= 24; i++) {
  const cell = document.createElement('div');
  cell.classList.add('calendar-cell');
  cell.textContent = i;
  cell.dataset.date = i;

  cell.addEventListener('click', () => handleDateClick(i, cell));
  calendarGrid.appendChild(cell);
}

// Behandling av datoklikk
async function handleDateClick(date, cell) {
  if (openedDates.has(date)) {
    showMessage(`День ${date} уже открыт!`);
    return;
  }

  // Få en vits fra API-en
  try {
    const response = await fetch(jokeAPI);
    const data = await response.json();
    const joke = data.joke || 'Весёлых праздников!';
    showMessage(joke);
    cell.classList.add('opened');
    openedDates.add(date);
  } catch (error) {
    showMessage('Не удалось загрузить шутку. Попробуйте позже.');
  }
}

// Vise en melding
function showMessage(text) {
  messageText.textContent = text;
  messageBox.style.display = 'block';
}

// Lukke en melding
closeMessageButton.addEventListener('click', () => {
  messageBox.style.display = 'none';
});

// Tilbakestill kalenderen
resetButton.addEventListener('click', () => {
  const cells = document.querySelectorAll('.calendar-cell');
  cells.forEach(cell => cell.classList.remove('opened'));
  openedDates.clear();
  showMessage('Календарь сброшен!');
});
