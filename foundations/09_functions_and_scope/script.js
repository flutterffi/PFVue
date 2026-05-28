const bootcampName = "PFVue Bootcamp";

function greetLearner(name) {
  const message = `Welcome to ${bootcampName}, ${name}.`;
  return message;
}

function calculateStudyDays(totalHours, dailyHours) {
  return totalHours / dailyHours;
}

console.log(greetLearner("Plato"));
console.log("Study days:", calculateStudyDays(30, 1.5));

{
  const blockScoped = "Only inside this block";
  console.log(blockScoped);
}

// Try this:
// 1. Write an arrow function version of greetLearner.
// 2. Add a function that returns "Beginner", "Intermediate", or "Advanced".
// 3. Compare var, let, and const with your own examples.
