const searchInput = document.querySelector("#search-input");
const levelFilter = document.querySelector("#level-filter");
const results = document.querySelector("#results");

const lessons = [
  { title: "HTML Forms", level: "beginner" },
  { title: "Flexbox Layout", level: "beginner" },
  { title: "Async JavaScript", level: "intermediate" },
  { title: "Vue Router", level: "intermediate" },
  { title: "State Architecture", level: "advanced" },
];

function renderItems(items) {
  results.innerHTML = "";

  items.forEach((lesson) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `<h2>${lesson.title}</h2><p>Level: ${lesson.level}</p>`;
    results.appendChild(card);
  });

  if (items.length === 0) {
    results.textContent = "No lessons match your filters.";
  }
}

function applyFilters() {
  const keyword = searchInput.value.trim().toLowerCase();
  const level = levelFilter.value;

  const filtered = lessons.filter((lesson) => {
    const matchesKeyword = lesson.title.toLowerCase().includes(keyword);
    const matchesLevel = level === "all" || lesson.level === level;
    return matchesKeyword && matchesLevel;
  });

  renderItems(filtered);
}

searchInput.addEventListener("input", applyFilters);
levelFilter.addEventListener("change", applyFilters);

renderItems(lessons);

// Try this:
// 1. Add a sort option for title A-Z.
// 2. Add tags to each lesson and filter by tag.
// 3. Highlight the part of the title that matches the search text.
