const learner = {
  name: "Plato",
  track: "Frontend",
  hoursPerWeek: 8,
};

const topics = ["HTML", "CSS", "JavaScript", "Vue"];
const extraTopics = [...topics, "TypeScript"];

const { name, track } = learner;

function buildSummary(user, skillList = []) {
  return `${user.name} is studying ${user.track} and practicing ${skillList.join(", ")}.`;
}

const doubledHours = [1, 2, 3].map((value) => value * 2);

console.log("Destructured name:", name);
console.log("Destructured track:", track);
console.log("Spread array:", extraTopics);
console.log("Template string:", buildSummary(learner, extraTopics));
console.log("Arrow function result:", doubledHours);

// Try this:
// 1. Add object spread to create a new learner with a different track.
// 2. Write a rest-parameter function that accepts many tasks.
// 3. Convert one function into an implicit-return arrow function.
