const statsContainer = document.querySelector("#stats");
const activityList = document.querySelector("#activity-list");

const stats = [
  { label: "Lessons Finished", value: 12 },
  { label: "Hours This Week", value: 8 },
  { label: "Projects Started", value: 2 },
];

const activities = [
  "Reviewed CSS Grid basics",
  "Built a search filter page",
  "Started async and fetch practice",
];

function renderStats() {
  stats.forEach((stat) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `<h2>${stat.value}</h2><p>${stat.label}</p>`;
    statsContainer.appendChild(card);
  });
}

function renderActivities() {
  activities.forEach((activity) => {
    const item = document.createElement("div");
    item.className = "card";
    item.textContent = activity;
    activityList.appendChild(item);
  });
}

renderStats();
renderActivities();

// Try this:
// 1. Add a chart placeholder section.
// 2. Add a button that appends a new recent activity item.
// 3. Turn stats and activities into fetched JSON data later.
