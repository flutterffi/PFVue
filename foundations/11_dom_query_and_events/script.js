const title = document.querySelector("#title");
const status = document.querySelector("#status");
const button = document.querySelector("#action-button");

button.addEventListener("click", () => {
  title.classList.toggle("active");
  status.textContent = "Nice. You handled a click event and changed the DOM.";
});

// Try this:
// 1. Add a second button that resets the text.
// 2. Append a new list item to the page on each click.
// 3. Track how many times the button has been pressed.
