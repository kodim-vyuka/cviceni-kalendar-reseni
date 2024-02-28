import { data } from './data.js';
import { CalendarItem } from './model.js';

const renderGrid = (): void => {
  const gridElement = document.querySelector('.grid')!;
  const count = 7 * 24;
  for (let i = 0; i < count; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    gridElement.appendChild(cell);
  }
};

const renderItem = (item: CalendarItem): Element => {
  const start = item.time.hours * 60 + item.time.minutes;
  const itemElement = document.createElement('div');
  itemElement.classList.add('calendar-item');
  itemElement.classList.add(`item-${item.type}`);
  itemElement.innerHTML = `
    <div class="title">${item.title}</div>
    <div class="time">${item.time.hours}:${String(item.time.minutes).padStart(2, '0')}</div>
  `;
  itemElement.style.marginTop = `${start}px`;
  itemElement.style.height = item.type === 'event' ? `${item.duration}px` : 'auto';

  if (item.type === 'task' && item.done) {
    itemElement.classList.add('task-done');
  }

  return itemElement;
};

const renderCalendar = (items: CalendarItem[]): void => {
  items.forEach((item) => {
    const columnElement = document.querySelector(`#day${item.time.day}`)!;
    columnElement.appendChild(renderItem(item));
  })
}

renderGrid();
renderCalendar(data);
