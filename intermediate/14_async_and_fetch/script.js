const loadButton = document.querySelector("#load-button");
const output = document.querySelector("#output");

async function loadLessons() {
  output.textContent = "Loading...";

  try {
    const response = await fetch("./data.json");

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const lessons = await response.json();
    output.textContent = JSON.stringify(lessons, null, 2);
  } catch (error) {
    output.textContent = `Error: ${error.message}`;
  }
}

loadButton.addEventListener("click", loadLessons);

// Try this:
// 1. Render the loaded items as HTML instead of JSON text.
// 2. Filter the list to only active or planned lessons.
// 3. Add a second async function that waits with setTimeout before loading.
