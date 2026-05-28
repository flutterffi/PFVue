const studyTasks = [
  { id: 1, title: "Review HTML", done: true },
  { id: 2, title: "Practice Flexbox", done: false },
  { id: 3, title: "Build a small form", done: false },
];

const pendingTasks = studyTasks.filter((task) => !task.done);
const titles = studyTasks.map((task) => task.title);
const firstTask = studyTasks[0];

console.log("All tasks:", studyTasks);
console.log("Pending tasks:", pendingTasks);
console.log("Titles:", titles);
console.log("First task title:", firstTask.title);

// Try this:
// 1. Add a priority field to each task.
// 2. Create a new array with only completed task titles.
// 3. Sort tasks by title or priority.
