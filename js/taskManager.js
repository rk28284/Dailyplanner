// taskManager.js
export const getTasks = () => {
  return JSON.parse(localStorage.getItem('tasks')) || [];
};

export const saveTasks = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const addTask = (text, category) => {
  const tasks = getTasks();
  tasks.push({ id: Date.now(), text, category, completed: false });
  saveTasks(tasks);
};

export const deleteTask = (id) => {
  const tasks = getTasks().filter(task => task.id !== id);
  saveTasks(tasks);
};

export const toggleComplete = (id) => {
  const tasks = getTasks().map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  saveTasks(tasks);
};

export const clearAllTasks = () => {
  localStorage.removeItem('tasks');
};
