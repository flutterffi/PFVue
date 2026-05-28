import { countCompleted, formatTopic } from "./helpers.js";

const topics = [" html ", "css", "vue 3"];
const tasks = [
  { title: "Read modules", done: true },
  { title: "Write helpers", done: false },
  { title: "Import in main.js", done: true },
];

console.log("Formatted topics:", topics.map(formatTopic));
console.log("Completed tasks:", countCompleted(tasks));

// Try this:
// 1. Add a helper that returns only unfinished task titles.
// 2. Create a default export in helpers.js and import it.
// 3. Split task data into its own module file.
