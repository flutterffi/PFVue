const STORAGE_KEY = "pfvue-vite-app-tasks";

const seedTasks = [
  {
    id: 1,
    title: "Review the router flow",
    status: "todo",
    priority: "high",
    assignee: "Plato",
    description: "Read route guards and understand guest-only and auth-only pages.",
  },
  {
    id: 2,
    title: "Inspect the Pinia store",
    status: "in-progress",
    priority: "medium",
    assignee: "Learner",
    description: "Follow how tasks load, select, update, and derive summary data.",
  },
  {
    id: 3,
    title: "Extend the dashboard UI",
    status: "done",
    priority: "low",
    assignee: "Plato",
    description: "Add one more summary card or a new view to practice structure.",
  },
];

function readTasks() {
  const savedValue = localStorage.getItem(STORAGE_KEY);
  if (savedValue) {
    return JSON.parse(savedValue);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(seedTasks));
  return seedTasks;
}

function writeTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  return tasks;
}

function wait(ms = 180) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

export async function listTasks() {
  await wait();
  return readTasks();
}

export async function insertTask(payload) {
  await wait();
  const tasks = readTasks();
  const newTask = {
    id: Date.now(),
    title: payload.title,
    status: payload.status,
    priority: payload.priority,
    assignee: payload.assignee,
    description: payload.description,
  };
  writeTasks([newTask, ...tasks]);
  return newTask;
}

export async function patchTask(id, payload) {
  await wait();
  const tasks = readTasks();
  const index = tasks.findIndex((task) => task.id === id);

  if (index === -1) {
    throw new Error("Task not found.");
  }

  const updatedTask = {
    ...tasks[index],
    ...payload,
  };

  tasks[index] = updatedTask;
  writeTasks(tasks);
  return updatedTask;
}

export async function removeTask(id) {
  await wait();
  const tasks = readTasks();
  const nextTasks = tasks.filter((task) => task.id !== id);

  if (nextTasks.length === tasks.length) {
    throw new Error("Task not found.");
  }

  writeTasks(nextTasks);
  return {
    id,
  };
}
