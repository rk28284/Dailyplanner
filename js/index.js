// main.js
import { addTask, deleteTask, toggleComplete, clearAllTasks } from './taskManager.js';
import { renderTasks } from './dom.js';
import { debounce, throttle } from './utils.js';

const taskInput = document.getElementById('new-task');
const addBtn = document.getElementById('add-task');
const categorySelect = document.getElementById('task-category');
const searchInput = document.getElementById('search-task');
const clearBtn = document.getElementById('clear-all');
const backToTopBtn = document.getElementById('back-to-top');

addBtn.addEventListener('click', () => {
  const text = taskInput.value.trim();
  const category = categorySelect.value;
  if (text) {
    addTask(text, category);
    taskInput.value = '';
    renderTasks();
  }
});

document.getElementById('task-list').addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    deleteTask(Number(e.target.dataset.id));
    renderTasks();
  } else if (e.target.classList.contains('toggle')) {
    toggleComplete(Number(e.target.dataset.id));
    renderTasks();
  }
});

searchInput.addEventListener('input', debounce((e) => {
  renderTasks(e.target.value);
}, 300));

clearBtn.addEventListener('click', () => {
  if (confirm('Clear all tasks?')) {
    clearAllTasks();
    renderTasks();
  }
});

window.addEventListener('scroll', throttle(() => {
  backToTopBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
}, 200));

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', renderTasks);
