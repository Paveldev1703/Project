// script.js

// Контейнер для календаря
const calendarGrid = document.getElementById('calendar-grid');
const messageBox = document.getElementById('message-box');
const messageText = document.getElementById('message');
const closeMessageButton = document.getElementById('close-message');
const resetButton = document.getElementById('reset-button');

// API для получения рождественских шуток
const jokeAPI = 'https://v2.jokeapi.dev/joke/Christmas?type=single';

// Хранилище открытых дат
const openedDates = new Set();

// Создание сетки календаря
for (let i = 1; i <= 24; i++) {
  const cell = document.createElement('div');
  cell.classList.add('calendar-cell');
  cell.textContent = i;
  cell.dataset.date = i;

  cell.addEventListener('click', () => handleDateClick(i, cell));
  calendarGrid.appendChild(cell);
}

// Обработка клика по дате
async function handleDateClick(date, cell) {
  if (openedDates.has(date)) {
    showMessage(`День ${date} уже открыт!`);
    return;
  }

  // Получение шутки из API
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

// Показ сообщения
function showMessage(text) {
  messageText.textContent = text;
  messageBox.style.display = 'block';
}

// Закрытие сообщения
closeMessageButton.addEventListener('click', () => {
  messageBox.style.display = 'none';
});

// Сброс календаря
resetButton.addEventListener('click', () => {
  const cells = document.querySelectorAll('.calendar-cell');
  cells.forEach(cell => cell.classList.remove('opened'));
  openedDates.clear();
  showMessage('Календарь сброшен!');
});
