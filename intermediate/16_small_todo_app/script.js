const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");

const todos = [
  { id: 1, title: "Practice closures", done: false },
  { id: 2, title: "Review localStorage", done: true },
];

function renderTodos() {
  list.innerHTML = "";

  todos.forEach((todo) => {
    const item = document.createElement("li");
    const button = document.createElement("button");

    item.textContent = todo.title;
    if (todo.done) {
      item.classList.add("done");
    }

    button.textContent = todo.done ? "Undo" : "Done";
    button.addEventListener("click", () => {
      todo.done = !todo.done;
      renderTodos();
    });

    item.append(" ", button);
    list.appendChild(item);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = input.value.trim();

  if (!title) {
    return;
  }

  todos.push({
    id: Date.now(),
    title,
    done: false,
  });

  input.value = "";
  renderTodos();
});

renderTodos();

// Try this:
// 1. Add a delete button for each todo.
// 2. Save todos to localStorage.
// 3. Show counts for total, active, and completed tasks.
