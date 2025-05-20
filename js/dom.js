// dom.js
import { getTasks, deleteTask, toggleComplete } from './taskManager.js';

export const renderTasks = (filter = '') => {
  const list = document.getElementById('task-list');
  list.innerHTML = '';

  const tasks = getTasks().filter(task =>
    task.text.toLowerCase().includes(filter.toLowerCase())
  );

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="${task.completed ? 'task-completed' : ''}">${task.text} (${task.category})</span>
      <div>
        <input type="checkbox" ${task.completed ? 'checked' : ''} data-id="${task.id}" class="toggle" />
        <button class="delete" data-id="${task.id}">❌</button>
      </div>
    `;
    list.appendChild(li);
  });
};
