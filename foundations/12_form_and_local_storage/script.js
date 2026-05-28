const form = document.querySelector("#study-form");
const topicInput = document.querySelector("#topic");
const minutesInput = document.querySelector("#minutes");
const output = document.querySelector("#output");

const savedPlan = JSON.parse(localStorage.getItem("pfvue-study-plan"));

if (savedPlan) {
  output.textContent = `${savedPlan.topic} for ${savedPlan.minutes} minutes`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const plan = {
    topic: topicInput.value.trim(),
    minutes: minutesInput.value.trim(),
  };

  localStorage.setItem("pfvue-study-plan", JSON.stringify(plan));
  output.textContent = `${plan.topic} for ${plan.minutes} minutes`;
  form.reset();
});

// Try this:
// 1. Validate empty input values before saving.
// 2. Add a clear button that removes the localStorage item.
// 3. Save multiple plans in an array instead of only one plan.
